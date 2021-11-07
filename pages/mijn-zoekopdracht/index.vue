<template>
  <HeroNoImg>
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

    <DashboardAlertUnpaid v-if="showInvalidPlanAlert" :email="customer.email" />
    <DashboardAlertCorporationCredentialsMissing
      v-if="showCorporationCredentialsMissingAlert"
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
          Beschikbare woningcorporaties en verhuurders
        </h1>
        <p class="mt-2 text-base text-gray-500">
          Om geen woningen te missen, adviseren we jou om in te loggen op alle
          woningaanbod websites.
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
          />
        </li>
      </ul>
      <p class="px-4 mt-2 mb-4 sm:px-6 text-sm text-gray-500">
        Zodra je inlogt op een woningaanbod website via WoningFinder, ga je
        akkoord met deze
        <span
          @click="showModal = 'volmacht'"
          class="underline hover:text-gray-900 cursor-pointer"
          >voorwaarden</span
        >. Hierdoor kun je automatisch reageren.
      </p>

      <DashboardVoorwaardenVolmachtModal
        @close="showModal = ''"
        v-if="showModal == 'volmacht'"
        :customer="customer"
      />
    </div>

    <!-- housing matches -->
    <DashboardHousingMatches
      v-if="customer && customer.housing_preferences_match"
      :housing_preferences_match="customer.housing_preferences_match"
    />

    <!-- preferences -->
    <DashboardPreferences
      v-if="customer && customer.housing_preferences"
      :customer="customer"
      :housing_preferences="customer.housing_preferences"
    />

    <!-- buttons -->
    <div class="items-center flex flex-col justify-center mt-5">
      <div class="flex flex-row space-x-4">
        <NuxtLink
          v-on:click.native="logout()"
          to="/"
          class="
            cursor-pointer
            btn
            w-min
            bg-gray-500
            hover:bg-red-800 hover:ring-red-500
            focus:ring-red-500
            py-2
          "
          >Uitloggen
        </NuxtLink>
        <a
          @click="edit()"
          class="
            cursor-pointer
            btn
            w-min
            bg-wf-purple
            hover:bg-wf-purple-dark hover:ring-wf-purple
            focus:ring-wf-purple
            py-2
          "
        >
          Bijwerken
        </a>
      </div>
      <a
        @click="deleteUser()"
        class="
          cursor-pointer
          mt-4
          whitespace-nowrap
          text-base
          font-medium
          text-gray-500
          hover:text-red-500
        "
      >
        Account verwijderen
      </a>
    </div>
  </HeroNoImg>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      customer: {},
      credentials: [],
      stats: { plan: '', reactions: 0, cities: 0 },
      showModal: '',
      showInvalidPlanAlert: false,
      showCorporationCredentialsMissingAlert: false,
    }
  },
  methods: {
    async getCorporationCredentials() {
      const credentials = await this.$axios.$get(
        '/me/corporation-credentials',
        {
          progress: true,
          headers: {
            Authorization: this.$cookies.get('auth'),
          },
        }
      )

      if (!credentials) {
        throw 'must login'
      }

      // show alert if no corporation credentials available
      this.showCorporationCredentialsMissingAlert =
        this.hasMissingCorporationCredentials(credentials)

      return credentials
    },
    async getCustomerInfo() {
      const customer = await this.$axios.$get('me', {
        progress: true,
        headers: {
          Authorization: this.$cookies.get('auth'),
        },
      })

      if (!customer) {
        throw 'must login'
      }

      if (!customer.valid_plan) {
        this.showInvalidPlanAlert = true
      }

      // build stats
      this.stats.reactions = customer.total_reaction
      this.stats.cities = customer.housing_preferences.city.length
      this.stats.plan =
        customer.plan.name.charAt(0).toUpperCase() + customer.plan.name.slice(1)

      return customer
    },
    edit() {
      // set housing preferences in storage (so prefilled)
      this.$store.commit('register/setPlan', this.customer.plan.name)

      this.$store.commit(
        'register/addCitiesRaw',
        this.customer.housing_preferences.city
      )

      this.$store.commit(
        'register/setHousingType',
        this.customer.housing_preferences.type
      )

      this.$store.commit(
        'register/setHousingPreferencesDetails',
        this.customer.housing_preferences
      )

      // push to route
      this.$router.push('/mijn-zoekopdracht/bijwerken')
    },
    logout() {
      this.$cookies.remove('auth')
    },
    deleteUser() {
      this.$router.push('/mijn-zoekopdracht/verwijderen')
    },
    hasMissingCorporationCredentials(credentials) {
      for (var i = 0; i < credentials.length; i++) {
        if (credentials[i].is_known) {
          return false
        }
      }

      return true
    },
  },
  async created() {
    this.customer = await this.getCustomerInfo().catch(() => {
      this.logout()
      this.$router.push('/login')
    })

    this.credentials = await this.getCorporationCredentials().catch(() => {
      this.logout()
      this.$router.push('/login')
    })
  },
}
</script>
