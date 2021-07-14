<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
        Je WoningFinder zoekopdracht
      </h1>
    </div>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      :alert="errorMsg"
    />

    <!-- registration steps -->
    <RegisterPlan
      ref="registerPlan"
      v-show="currentStep == 1"
      :plan="offering.plan"
    />

    <RegisterCity
      ref="registerCity"
      v-show="currentStep == 2"
      :supported_cities="offering.supported_cities"
    />

    <RegisterCityDistrict
      ref="registerCityDistrict"
      v-show="currentStep == 3"
      :supported_cities="offering.supported_cities"
    />

    <RegisterHousing
      ref="registerHousing"
      v-show="currentStep == 4"
      :supported_housing="offering.supported_housing_type"
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

    <RegisterTerms ref="registerTerms" v-show="currentStep == 7" />

    <!-- buttons -->
    <div class="items-center w-full inline-flex mt-5 space-x-4">
      <div v-if="currentStep == 1">
        <NuxtLink
          to="/"
          class="
            cursor-pointer
            whitespace-nowrap
            text-base
            font-medium
            text-gray-500
            hover:text-gray-900
          "
        >
          Terug
        </NuxtLink>
      </div>
      <div v-else>
        <a
          @click="previous"
          class="
            cursor-pointer
            whitespace-nowrap
            text-base
            font-medium
            text-gray-500
            hover:text-gray-900
          "
        >
          Terug
        </a>
      </div>

      <a
        @click="validate"
        class="btn"
        v-bind:class="[
          currentStep == totalStep ? 'flex-1' : 'max-w-min',
          submitted ? 'bg-gray-500' : '',
        ]"
        >{{ nextButtonText() }}</a
      >
      <p
        class="
          flex-1
          whitespace-nowrap
          text-sm
          font-medium
          text-gray-400 text-right
          self-end
        "
      >
        {{ currentStep }} / {{ totalStep }}
      </p>
    </div>
  </Hero>
</template>

<script>
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
    }
  },
  methods: {
    nextButtonText() {
      // build register button with price
      if (this.currentStep == this.totalStep) {
        var price = ''
        for (var i = 0; i < this.offering.plan.length; i++) {
          if (
            this.offering.plan[i].name ==
            this.$store.getters['register/getPlan'].name
          ) {
            price = ' (€' + this.offering.plan[i].price + ')'
          }
        }
        return 'Aanmelden'.concat(price)
      }

      return 'Volgende'
    },
    next() {
      if (this.currentStep < this.totalStep) {
        this.currentStep++
      }
    },
    previous() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    validate(e) {
      e.preventDefault()

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

            // send request
            this.submit()
            this.submitted = true
          }

          return
      }

      this.next()
    },
    async submit() {
      var stripe = Stripe(process.env.stripeKey)
      await this.$axios
        .$post('signup', this.$store.getters['register/getRegister'])
        .then((response) => {
          return response
        })
        .then((session) => {
          return stripe.redirectToCheckout({ sessionId: session.id })
        })
        .catch((error) => {
          this.errorMsg = 'Er is iets misgegaan: "' + error + '".'
          this.error = true
        })
    },
    hideAlert() {
      this.submitted = false
      this.error = false
    },
  },
}
</script>
