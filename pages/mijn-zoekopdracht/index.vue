<template>
  <div class="bg-white pt-8 overflow-hidden lg:relative lg:py-24">
    <div
      class="
        hidden
        lg:block
        sm:relative
        sm:mt-12
        sm:py-16
        lg:absolute
        lg:inset-y-0
        lg:right-0
        lg:w-1/2
      "
    >
      <div
        class="
          absolute
          inset-y-0
          left-1/2
          w-screen
          bg-gray-50
          rounded-l-3xl
          lg:left-80
          lg:right-0
          lg:w-full
        "
      ></div>
      <svg
        class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
        width="404"
        height="392"
        fill="none"
        viewBox="0 0 404 392"
      >
        <defs>
          <pattern
            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="392"
          fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
        />
      </svg>
    </div>

    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 relative">
      <div>
        <Logo />
        <div class="mt-14">
          <div class="mt-6 sm:max-w-xl">
            <h1
              class="
                text-3xl
                font-extrabold
                text-wf-purple
                tracking-tight
                sm:text-4xl
              "
            >
              Je zoekopdracht
            </h1>
          </div>

          <AlertError
            class="mt-4"
            v-if="showInvalidPlanAlert"
            @click="hideAlert"
            alert="Let op: Je hebt je zoekopdracht nog niet voltooid. Je reageert dus niet (meer) automatisch op woningen."
          />

          <!-- stats -->
          <div>
            <dl class="mt-5 grid grid-cols-3 gap-5">
              <DashboardStats title="Plan" :text="stats.plan" />
              <DashboardStats title="Reacties" :text="stats.reactions" />
              <DashboardStats title="Steden" :text="stats.cities" />
            </dl>
          </div>

          <!-- housing credentials -->
          <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 mt-4 mb-2 sm:px-6">
              <h1 class="text-xl text-gray-900">
                Beschikbare woningcorporaties
              </h1>
              <p class="mt-2 text-base text-gray-500">
                Om meer kans te hebben op een woning, adviseren we jou om in te
                loggen op alle woningcorporaties.
              </p>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="creds in credentials" :key="creds.corporation_name">
                <DashboardCorporationCredentialsList
                  @click="showModal = creds.corporation_name"
                  :credentials="creds"
                />

                <DashboardCorporationCredentialsModal
                  @close="showModal = ''"
                  v-if="showModal == creds.corporation_name"
                  :credentials="creds"
                  :jwt="$route.query.jwt"
                />
              </li>
            </ul>
            <p class="px-4 mt-2 mb-4 sm:px-6 text-sm text-gray-500">
              Zodra je inlogt op een woningcorporatie via WoningFinder, ga je
              akkoord met deze
              <span
                @click="showModal = 'volmacht'"
                class="underline hover:text-gray-900 cursor-pointer"
                >volmacht</span
              >. Hierdoor kun je automatisch reageren.
            </p>

            <DashboardVoorwaardenVolmachtModal
              @close="showModal = ''"
              v-if="showModal == 'volmacht'"
              :customer="customer"
            />
          </div>

          <!-- preferences -->
          <DashboardPreferences
            v-if="customer && customer.housing_preferences"
            :customer="customer"
            :housing_preferences="customer.housing_preferences"
          />

          <!-- buttons -->
          <div class="items-center flex flex-col justify-center mt-5">
            <a
              @click="edit()"
              class="
                cursor-pointer
                btn
                w-min
                bg-wf-purple
                hover:bg-wf-purple-dark
                hover:ring-wf-purple
                focus:ring-wf-purple
                py-2
              "
            >
              Bijwerken
            </a>
            <NuxtLink
              to="/"
              class="
                mt-2
                whitespace-nowrap
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
              "
              >Uitloggen
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {},
      credentials: [],
      stats: { plan: '', reactions: 0, cities: 0 },
      showModal: '',
      showInvalidPlanAlert: false,
    }
  },
  methods: {
    async getCorporationCredentials(params) {
      const credentials = await this.$axios.$get(
        '/me/corporation-credentials',
        {
          progress: true,
          params,
        }
      )

      if (!credentials) {
        throw 'must login'
      }

      return credentials
    },
    async getCustomerInfo(params) {
      const customer = await this.$axios.$get('me', {
        progress: true,
        params,
      })

      if (!customer) {
        throw 'must login'
      }

      if (!customer.valid_plan) {
        this.showInvalidPlanAlert = true
      }

      // build stats
      if (customer.housing_preferences_match) {
        this.stats.reactions = customer.housing_preferences_match.length
      }
      this.stats.cities = customer.housing_preferences.city.length
      this.stats.plan =
        customer.plan.name.charAt(0).toUpperCase() + customer.plan.name.slice(1)

      return customer
    },
    edit() {
      // set housing preferences in storage (so prefilled)
      for (var i = 0; i < this.customer.housing_preferences.city.length; i++) {
        this.$store.commit(
          'register/addCity',
          this.customer.housing_preferences.city[i].name
        )
      }

      this.$store.commit(
        'register/setHousingType',
        this.customer.housing_preferences.type
      )

      this.$store.commit(
        'register/setHousingPreferencesDetails',
        this.customer.housing_preferences
      )

      // push to route
      this.$router.push({
        path: '/mijn-zoekopdracht/bijwerken',
        query: { jwt: this.$route.query.jwt },
      })
    },
    hideAlert() {
      this.showInvalidPlanAlert = false
    },
  },
  async created() {
    // check jwt and do not make request if not provided or empty
    var jwt = this.$route.query.jwt
    if (!jwt || jwt == '') {
      return
    }

    this.customer = await this.getCustomerInfo({ jwt: jwt }).catch(() => {
      this.$router.push('/login')
    })

    this.credentials = await this.getCorporationCredentials({ jwt: jwt }).catch(
      () => {
        this.$router.push('/login')
      }
    )
  },
  middleware({ route, redirect }) {
    // If the customer is not authenticated return to login
    if (!route.query.jwt || route.query.jwt == '') {
      return redirect('/login')
    }
  },
}
</script>