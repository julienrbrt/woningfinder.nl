<template>
  <div class="bg-white">
    <Hero v-if="!mustLogin">
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
        <dl class="mt-5 grid grid-cols-2 gap-5">
          <div
            class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt class="text-sm font-medium text-gray-500 truncate">
              Aantal reacties
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ numberReaction }}
            </dd>
          </div>

          <div
            class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt class="text-sm font-medium text-gray-500 truncate">
              Aantal steden
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ numberCity }}
            </dd>
          </div>
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
            <SettingsCorporationCredentialsList
              @click="showModal = creds.corporation_name"
              :credentials="creds"
            />

            <SettingsCorporationCredentialsModal
              @close="showModal = ''"
              v-if="showModal == creds.corporation_name"
              :credentials="creds"
              :jwt="$route.query.jwt"
            />
          </li>
        </ul>
      </div>

      <!-- settings -->
      <SettingsPreferences :customer="customer" />

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

    <!-- show login page if cannot login -->
    <SettingsLogin v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {},
      credentials: [],
      numberReaction: 0,
      numberCity: 0,
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
      this.numberCity = customer.housing_preferences.city.length
      if (customer.plan.name.length <= 0) {
        this.showHasPaidAlert = true
      }

      if (customer.housing_preferences_match) {
        this.numberReaction = customer.housing_preferences_match.length
      }
    },
    hideAlert() {
      this.showHasPaidAlert = false
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
}
</script>
