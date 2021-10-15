<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <!-- payment cancelled flow -->
      <h1
        v-if="$route.query.cancelled"
        class="text-4xl font-extrabold text-gray-900 tracking-tight"
      >
        Er is iets misgegaan met je betaling
      </h1>
      <!-- payment flow -->
      <h1 v-else class="text-4xl font-extrabold text-gray-900 tracking-tight">
        Begin met automatisch reageren
      </h1>

      <p class="mt-6 text-lg text-gray-500">
        Je zoekopdracht is niet helemaal voltooid omdat er iets is misgegaan met
        je betaling. Probeer het opnieuw om (blijven) automatisch reageren.
      </p>
    </div>

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
      class="
        my-4
        py-4
        shadow-sm
        focus:ring-wf-orange
        focus:border-wf-orange
        w-full
        text-base
        border-gray-300
        rounded-md
      "
    />

    <!-- info alert -->
    <div class="mt-4 rounded-md bg-gray-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <InformationCircleIcon class="h-5 w-5 text-gray-400" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            Niet tevreden met WoningFinder? Neem dan
            <NuxtLink
              to="/contact"
              class="underline text-gray-700 hover:text-gray-900"
              >contact</NuxtLink
            >
            met ons op.
          </p>
        </div>
      </div>
    </div>

    <div class="items-center inline-flex mt-4 space-x-4">
      <BackButton overwrite="/" />
      <div class="rounded-md shadow">
        <button @click="send" type="submit" class="btn">Betalen</button>
      </div>
    </div>
  </Hero>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering', { progress: true })
    return { offering }
  },
  data() {
    return {
      email: '',
      error: false,
      errorMsg: '',
    }
  },
  methods: {
    hideAlert() {
      this.error = false
    },
    async send() {
      if (!this.validForm) {
        this.error = true
        this.errorMsg =
          'We hebben je e-mail nodig. Controleer het formulier nogmaals.'
        return
      }

      // send request
      await this.$axios
        .$post('payment', {
          email: this.email,
        })
        .then((response) => {
          this.email = ''
          return response
        })
        .then((data) => {
          // redirect to stripe
          if (data.stripe_session_id) {
            var stripe = Stripe(process.env.stripeKey)

            return stripe.redirectToCheckout({
              sessionId: data.stripe_session_id,
            })
          }
        })
        .catch((error) => {
          this.error = true
          if (error.response.status == 404) {
            error = 'gebruiker niet gevonden'
          }

          this.errorMsg =
            'Er is iets misgegaan: "' + error.response.data.message + '".'
        })
    },
  },
  computed: {
    validForm() {
      return this.email && this.email.length > 0
    },
  },
  mounted() {
    this.email = this.$route.query.email
  },
}
</script>