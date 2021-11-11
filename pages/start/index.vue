<template>
  <Hero>
    <RegisterTitle />

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      :alert="errorMsg"
    />

    <RegisterPlan
      ref="registerPlan"
      v-show="currentStep == 1"
      :plan="offering.plan"
    />

    <!-- map -->
    <template v-slot:illustration>
      <IllustrationMaps
        v-if="offering && currentStep == 2"
        :cities="
          citiesSelection.length > 0
            ? citiesSelection
            : offering.supported_cities
        "
      />
    </template>

    <RegisterCity
      ref="registerCity"
      v-show="currentStep == 2"
      :supported_cities="offering.supported_cities"
    />

    <RegisterCityDistrict
      ref="registerCityDistrict"
      v-show="currentStep == 3"
      :selected_cities="citiesSelection"
    />

    <RegisterHousing
      ref="registerHousing"
      v-show="currentStep == 4"
      :supported_housing="offering.supported_housing_types"
    />

    <RegisterHousingPreferences
      ref="registerHousingPreferences"
      v-show="currentStep == 5"
    />

    <RegisterCustomer
      ref="registerCustomer"
      v-show="currentStep == 6"
      :plan="offering.plan"
    />

    <RegisterTerms
      ref="registerTerms"
      v-show="currentStep == 7"
      :plan="offering.plan"
    />

    <Navigator
      :currentStep="currentStep"
      :totalStep="totalStep"
      :buttonStr="buttonStr()"
      @validate="validate"
      @previous="previous"
    />
  </Hero>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

export default {
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering', { progress: true })
    return { offering }
  },
  data() {
    return {
      submitted: false,
      error: false,
      errorMsg:
        'Er is iets misgegaan. Controleer het formulier nogmaals. Blijf dit gebeuren? Neem dan contact met ons op.',
      currentStep: 1,
      totalStep: 7,
      selected_cities: [],
    }
  },
  methods: {
    buttonStr() {
      if (this.currentStep == this.totalStep) {
        return 'Aanmelden'
      }

      return 'Volgende'
    },
    next() {
      if (this.currentStep <= this.totalStep) {
        this.currentStep++
      }
    },
    previous() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    async validate() {
      switch (this.currentStep) {
        case 1:
          if (!this.$refs.registerPlan.validate()) {
            return
          }
          break

        case 2:
          if (!this.$refs.registerCity.validate()) {
            return
          }
          break

        case 3:
          // no need to validate because city district
          break

        case 4:
          if (!this.$refs.registerHousing.validate()) {
            return
          }
          break

        case 5:
          if (!this.$refs.registerHousingPreferences.validate()) {
            return
          }
          break

        case 6:
          if (!this.$refs.registerCustomer.validate()) {
            return
          }
          break

        case 7:
          if (!this.submitted) {
            // start loading bar
            this.$nuxt.$loading.start()

            // get data from vuex
            var data = this.$store.getters['register/getRegister']

            // send request
            await this.submit(data)
            this.submitted = true
            if (this.error) {
              return
            }

            // register event
            this.$ga.event('start', 'signup', 'successful', 1)

            // end loading bar
            this.$nuxt.$loading.finish()

            // redirect to landing page of stripe (plan hardcoded for now)
            if (data.plan.name == 'pro') {
              await this.subscribe(data.email)
              if (this.error) {
                return
              }
            } else {
              this.$router.push({ path: '/', query: { thanks: true } })
            }
          }

          return
      }

      this.next()
    },
    async submit(input) {
      await this.$axios
        .$post('register', input)
        .then((response) => {
          return response
        })
        .catch((error) => {
          this.error = true
          this.errorMsg =
            'Er is iets misgegaan: "' + error.response.data.message + '".'
        })
    },
    async subscribe(email) {
      const stripe = await loadStripe(process.env.stripeKey)

      // send request
      await this.$axios
        .$post('payment', {
          email: email,
        })
        .then((response) => {
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
          this.errorMsg =
            'Er is iets misgegaan: "' + error.response.data.message + '".'
        })
    },
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    hideAlert() {
      this.submitted = false
      this.error = false
    },
  },
  computed: {
    citiesSelection() {
      var cities = this.$store.getters['register/getCities']
      var citiesSelection = []

      cities.forEach((city) => {
        citiesSelection.push(
          this.offering.supported_cities.find((c) => c.name == city.name)
        )
      })

      return citiesSelection
    },
  },
}
</script>
