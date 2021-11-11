<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
        Je zoekopdracht voltooien
      </h1>

      <p class="mt-6 text-lg text-gray-500">
        Je zoekopdracht is niet helemaal voltooid omdat er iets is misgegaan met
        je betaling.
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
        focus:ring-wf-orange focus:border-wf-orange
        w-full
        text-base
        border-gray-300
        rounded-md
      "
    />

    <div class="items-center inline-flex mt-4 space-x-4">
      <BackButton />
      <div class="rounded-md shadow">
        <button @click="subscribe" type="submit" class="btn">
          Probeer opnieuw
        </button>
      </div>
    </div>
  </Hero>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'
import { loadStripe } from '@stripe/stripe-js'

export default {
  components: {
    InformationCircleIcon,
  },
  head() {
    return {
      title: 'Je zoekopdracht voltooien',
    }
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
    async subscribe() {
      if (!this.validForm) {
        this.error = true
        this.errorMsg =
          'We hebben je e-mail nodig. Controleer het formulier nogmaals.'
        return
      }

      const stripe = await loadStripe(process.env.stripeKey)

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