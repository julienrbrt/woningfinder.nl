<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1 class="text-3xl font-extrabold text-wf-purple tracking-tight">
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

    <RegisterTerms
      ref="registerTerms"
      v-show="currentStep == 7"
      :plan="offering.plan"
    />

    <RegisterConfirm ref="registerConfirm" v-show="currentStep == 8" />

    <!-- buttons -->
    <div class="items-center w-full inline-flex mt-5">
      <div v-show="currentStep < this.totalStep" class="mr-4">
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
      </div>

      <a
        @click="validate"
        class="btn"
        v-bind:class="currentStep == totalStep ? 'flex-1' : 'max-w-min'"
        >{{ nextButtonText() }}</a
      >
      <p
        class="
          flex-1
          whitespace-nowrap
          text-sm
          font-medium
          text-gray-500 text-right
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
      totalStep: 8,
    }
  },
  methods: {
    nextButtonText() {
      if (this.currentStep == this.totalStep - 1) {
        return 'Aanmelden'
      }

      if (this.currentStep == this.totalStep) {
        return 'Begrijp ik'
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
            // TODO
            // this.submit()
            this.submitted = true

            if (!this.error) {
              break
            }
          }

          return
        case 8:
          this.$router.push('/')
          return
      }

      this.next()
    },
    async submit() {
      var stripe = Stripe(process.env.stripeKey)
      await this.$axios
        .$post('register', this.$store.getters['register/getRegister'])
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
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    hideAlert() {
      this.submitted = false
      this.error = false
    },
  },
}
</script>
