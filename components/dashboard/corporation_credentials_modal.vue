<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- Background overlay, show/hide based on modal state. -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            @click="$emit('close')"
            type="button"
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-wf-orange"
          >
            <span class="sr-only">Sluit</span>
            <XIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="sm:flex items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              v-if="!credentials.is_known"
              class="text-xl py-2 leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Inloggen op {{ credentials.corporation_name }}
            </h3>
            <h3
              v-else
              class="text-xl py-2 leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Opnieuw inloggen op {{ credentials.corporation_name }}
            </h3>
            <p class="py-2 text-sm text-gray-500">
              We hebben je {{ credentials.corporation_name }} inloggegevens
              nodig. Je inloggegevens worden met versluiting opgeslagen op
              WoningFinder. We kunnen zelf je gegevens niet zien.
            </p>
            <div class="py-2 items-center w-full">
              <label for="username" class="text-sm font-medium text-gray-900">
                Gebruikersnaam
              </label>
              <input
                v-model="login.login"
                id="username"
                name="username"
                type="email"
                autocomplete="username"
                class="mb-4 shadow-sm focus:ring-wf-orange focus:border-wf-orange w-full sm:text-sm border-gray-300 rounded-md"
              />
              <label for="password" class="text-sm font-medium text-gray-900">
                Watchwoord
              </label>
              <input
                v-model="login.password"
                id="password"
                name="password"
                type="password"
                class="shadow-sm focus:ring-wf-orange focus:border-wf-orange w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <!-- error message -->
            <p v-if="error" class="text-sm text-red-400">
              We kunnen je gegevens niet verifiëren. Controleer je gegevens of
              probeer later nogmaals.
            </p>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            @click="sendCredentials"
            type="button"
            class="btn w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-wf-orange text-base font-medium text-white hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Login
          </button>
          <button
            @click="$emit('close')"
            type="button"
            class="btn mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white hover:bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-wf-orange sm:mt-0 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, KeyIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    XIcon,
    KeyIcon,
  },
  props: ['credentials', 'jwt'],
  data() {
    return {
      login: {
        login: '',
        password: '',
      },
      error: false,
    }
  },
  methods: {
    async sendCredentials(e) {
      e.preventDefault()

      const params = {
        jwt: this.$route.query.jwt,
      }

      await this.$axios
        .$post(
          '/me/corporation-credentials',
          {
            corporation_name: this.credentials.corporation_name,
            login: this.login.login,
            password: this.login.password,
          },
          { params }
        )
        .then(() => {
          this.corporation_name = ''
          this.password = ''

          // close modal
          this.$emit('close')

          // reload window
          window.location.reload()
        })
        .catch((error) => {
          this.error = true
        })
    },
  },
}
</script>