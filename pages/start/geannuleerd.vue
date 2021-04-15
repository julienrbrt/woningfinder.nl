<template>
  <div class="bg-white">
    <Hero>
      <div class="mt-6 sm:max-w-xl">
        <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
          Er is iets misgegaan met je betaling
        </h1>
        <p class="mt-6 text-lg text-gray-500">
          Je zoekopdracht is niet helemaal voltooid omdat we jouw betaling niet
          hebben ontvangen. Je zoekopdracht word automatisch verwijderd over 24
          uur. Wil je nog steeds gebruik maken van WoningFinder? Probeer dan
          opnieuw.
        </p>
      </div>

      <div v-show="retry">
        <p class="mt-6 text-lg text-gray-500">
          Omdat we je privacy respecteren, weten we niet meer wie je bent. Om je
          zoekopdracht te voltooien, moet je je e-mail invullen en je plan
          kiezen.
        </p>

        <AlertError
          class="mt-4"
          v-if="error"
          @click="hideAlert"
          :alert="errorMsg"
        />

        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="E-mailadres"
          class="my-4 py-4 shadow-sm focus:ring-wf-orange focus:border-wf-orange w-full text-base border-gray-300 rounded-md"
        />

        <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="space-y-4">
            <label
              v-for="plan in offering.plan"
              :key="plan.name"
              class="relative block rounded-lg border bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-wf-orange sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
              v-bind:class="[
                selectedPlan === plan.name
                  ? 'border-wf-orange '
                  : 'border-gray-300',
              ]"
            >
              <input
                type="radio"
                name="plan"
                v-model="selectedPlan"
                :value="plan.name"
                class="sr-only"
              />
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    {{ planTitle(plan.name) }}
                  </p>
                  <div
                    v-if="planTitle(plan.name) == 'Pro'"
                    class="text-gray-500"
                  >
                    <p class="sm:inline">Basis</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true"
                      >&middot;</span
                    >
                    <p class="sm:inline">Sneller garantie</p>
                  </div>
                </div>
              </div>
              <div
                class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
              >
                <div class="font-medium text-gray-900">€{{ plan.price }}</div>
                <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
              </div>
            </label>
          </div>
        </fieldset>
      </div>

      <div class="items-center inline-flex mt-5 space-x-4">
        <NuxtLink
          to="/"
          @click.native="cancelled"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >Terug
        </NuxtLink>
        <div class="rounded-md shadow">
          <button
            @click="send"
            type="submit"
            class="btn bg-wf-purple hover:bg-wf-purple-dark hover:ring-wf-purple focus:ring-wf-purple"
          >
            {{ buttonText() }}
          </button>
        </div>
      </div>
    </Hero>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering', { progress: true })
    return { offering }
  },
  data() {
    return {
      email: '',
      selectedPlan: '',
      retry: false,
      error: false,
      errorMsg: '',
    }
  },
  methods: {
    buttonText() {
      // build payment button
      if (!this.retry) {
        return 'Probeer opnieuw'
      }

      return 'Voltooien'
    },
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    hideAlert() {
      this.error = false
    },
    cancelled() {
      this.saEvent('cancelled_payment_button_clicked')
    },
    async send() {
      if (!this.retry) {
        this.retry = true
        return
      }

      if (!this.validForm) {
        this.error = true
        this.errorMsg =
          'We hebben al je gegevens nodig. Controleer het formulier nogmaals.'
        return
      }

      // send request
      var stripe = Stripe(process.env.stripeKey)

      await this.$axios
        .$post('payment', {
          email: this.email,
          plan: this.selectedPlan,
        })
        .then((response) => {
          this.email = ''
          this.selectedPlan = ''
          return response
        })
        .then((session) => {
          return stripe.redirectToCheckout({ sessionId: session.id })
        })
        .catch((error) => {
          this.error = true
          if (error.response.status == 404) {
            error = 'gebruiker niet gevonden'
          }

          this.errorMsg = 'Er is iets misgegaan: "' + error + '".'
        })

      this.saEvent('retry_payment_button_clicked')
    },
  },
  computed: {
    validForm() {
      return this.email.length > 0 && this.selectedPlan.length > 0
    },
  },
}
</script>