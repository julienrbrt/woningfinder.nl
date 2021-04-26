<template>
  <div class="bg-white">
    <Hero>
      <div class="mt-6 sm:max-w-xl">
        <h1
          class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Je zoekopdracht
        </h1>
      </div>

      <AlertError
        class="mt-4"
        v-if="showHasPaidAlert"
        @click="hideAlert"
        alert="Let op: Je hebt nog niet betaald. We reageren dus nog niet voor jou."
      />

      <!-- stats -->
      <div>
        <dl class="mt-5 grid grid-cols-3 gap-5">
          <DashboardStats title="Plan" :text="stats.plan" />
          <DashboardStats title="Aantal reacties" :text="stats.reactions" />
          <DashboardStats title="Aantal steden" :text="stats.cities" />
        </dl>
      </div>

      <!-- housing credentials -->
      <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 mt-4 mb-2 sm:px-6">
          <h1 class="text-xl text-gray-900">Beschikbare woningcorporaties</h1>
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
          <span @click="showVolmacht" class="underline cursor-pointer"
            >volmacht</span
          >. Hierdoor kunnen wij voor jou reageren.
        </p>

        <DashboardVoorwaardenVolmachtModal
          @close="showModal = ''"
          v-if="showModal == 'volmacht'"
          :customer="customer"
        />
      </div>

      <!-- preferences -->
      <DashboardPreferences :customer="customer" />

      <!-- buttons -->
      <div
        class="items-center inline-flex justify-center mt-5 space-x-4 w-full"
      >
        <NuxtLink
          to="/"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >Afmelden
        </NuxtLink>
      </div>
    </Hero>
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
      showHasPaidAlert: false,
      mustLogin: true,
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
      this.credentials = credentials
    },
    async getCustomerInfo(params) {
      const customer = await this.$axios.$get('/me', {
        progress: true,
        params,
      })
      this.customer = customer
      this.stats.cities = customer.housing_preferences.city.length
      this.stats.plan = this.planTitle(customer.plan.name)
      if (customer.plan.name.length <= 0) {
        this.showHasPaidAlert = true
      }

      if (customer.housing_preferences_match) {
        this.stats.reactions = customer.housing_preferences_match.length
      }
    },
    hideAlert() {
      this.showHasPaidAlert = false
    },
    showVolmacht() {
      this.showModal = 'volmacht'
    },
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
  },
  created() {
    // check jwt and do not make request if not provided or empty
    var jwt = this.$route.query.jwt
    if (!jwt || jwt == '') {
      return
    }

    const params = {
      jwt: jwt,
    }

    this.getCustomerInfo(params).then(() => {
      this.mustLogin = false
    })

    this.getCorporationCredentials(params).then(() => {
      this.mustLogin = false
    })
  },
  middleware({ route, redirect }) {
    // If the customer is not authenticated return to login
    if (!route.query.jwt || route.query.jwt == '') {
      return redirect('/login')
    }
  },
}
</script>
