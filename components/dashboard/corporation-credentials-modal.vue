<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
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
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
        "
      >
        <div class="absolute top-0 right-0 pt-4 pr-4">
          <button
            @click="$emit('close')"
            type="button"
            class="
              bg-white
              rounded-md
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-bg-wf-orange
            "
          >
            <span class="sr-only">Sluiten</span>
            <XIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="sm:flex items-start">
          <div class="text-left sm:ml-4">
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

            <p class="py-2 text-gray-500">
              Log in met je {{ credentials.corporation_name }} account. Je
              reageert daarna automatisch op het aanbod van
              {{ credentials.corporation_name }} dat matcht met je zoekopdracht.
            </p>

            <AlertError
              v-if="error"
              @click="hideAlert"
              :alert="getAlertMsg(credentials)"
            />

            <div class="py-2 items-center w-full">
              <label for="username" class="text-sm font-medium text-gray-900">
                Gebruikersnaam
              </label>
              <div class="mt-1 relative">
                <input
                  v-model="login.login"
                  id="username"
                  name="username"
                  type="email"
                  autocomplete="username"
                  class="
                    mb-4
                    shadow-sm
                    focus:ring-wf-orange focus:border-wf-orange
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
              </div>
              <label for="password" class="text-sm font-medium text-gray-900">
                Watchwoord
              </label>
              <div class="mt-1 relative">
                <input
                  v-model="login.password"
                  id="password"
                  name="password"
                  :type="!passwordShow ? 'password' : 'text'"
                  class="
                    shadow-sm
                    focus:ring-wf-orange focus:border-wf-orange
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
                <!-- password toggle -->
                <button
                  @click="togglePassword"
                  class="
                    cursor-pointer
                    absolute
                    inset-y-0
                    right-0
                    pr-3
                    flex
                    items-center
                  "
                >
                  <EyeIcon v-if="!passwordShow" class="h-6 w-6 text-gray-500" />
                  <EyeOffIcon v-else class="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex flex-row-reverse">
          <button
            @click="sendCredentials"
            type="button"
            class="sm:ml-3 btn btn-primary btn-block"
          >
            Inloggen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, KeyIcon, EyeIcon, EyeOffIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    XIcon,
    KeyIcon,
    EyeIcon,
    EyeOffIcon,
  },
  props: ['credentials'],
  data() {
    return {
      login: {
        login: '',
        password: '',
      },
      error: false,
      passwordShow: false,
    }
  },
  methods: {
    async sendCredentials() {
      await this.$axios
        .$post(
          '/me/corporation-credentials',
          {
            corporation_name: this.credentials.corporation_name,
            login: this.login.login,
            password: this.login.password,
          },
          {
            headers: {
              Authorization: this.$cookies.get('auth'),
            },
          }
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
    corporationTitle(url) {
      return url.substring('https://'.length)
    },
    togglePassword() {
      this.passwordShow = !this.passwordShow
    },
    hideAlert() {
      this.error = false
    },
    getAlertMsg(credentials) {
      return (
        'Deze combinatie van gebruikersnaam en/of wachtwoord is niet bekend bij ' +
        credentials.corporation_name +
        '. Let op: Je moet dezelfde inloggegevens gebruiken die je gebruikt om in te loggen op <a href="' +
        credentials.corporation_url +
        '"  target="_blank" class="underline text-sm hover:text-red-700">' +
        this.corporationTitle(credentials.corporation_url) +
        '</a>.'
      )
    },
  },
}
</script>