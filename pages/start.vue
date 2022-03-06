<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1 class="text-3xl font-extrabold text-wf-purple tracking-tight">
        {{ title }}
      </h1>
    </div>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      :alert="errorMsg"
    />

    <!-- map -->
    <template v-slot:illustration>
      <IllustrationMap
        v-if="offering && currentStep == 1"
        :cities="citiesSelection"
      />
    </template>

    <RegisterCity
      ref="registerCity"
      v-show="currentStep == 1"
      :supported_cities="offering.supported_cities"
    />

    <RegisterCityDistrict
      ref="registerCityDistrict"
      v-show="currentStep == 2"
      :selected_cities="citiesSelection"
    />

    <RegisterHousing
      ref="registerHousing"
      v-show="currentStep == 3"
      :supported_housing="offering.supported_housing_types"
    />

    <RegisterHousingPreferences
      ref="registerHousingPreferences"
      v-show="currentStep == 4"
    />

    <RegisterCustomer ref="registerCustomer" v-show="currentStep == 5" />

    <RegisterTerms ref="registerTerms" v-show="currentStep == 6" />

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
export default {
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering', { progress: true })
    return { offering }
  },
  data() {
    return {
      title: 'Je WoningFinder zoekopdracht',
      submitted: false,
      error: false,
      errorMsg:
        'Er is iets misgegaan. Controleer het formulier nogmaals. Blijf dit gebeuren? Neem dan contact met ons op.',
      currentStep: 1,
      totalStep: 6,
      selected_cities: [],
    }
  },
  head() {
    return {
      title: this.title,
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
          if (!this.$refs.registerCity.validate()) {
            return
          }
          break

        case 2:
          // no need to validate because city district
          break

        case 3:
          if (!this.$refs.registerHousing.validate()) {
            return
          }
          break

        case 4:
          if (!this.$refs.registerHousingPreferences.validate()) {
            return
          }
          break

        case 5:
          if (!this.$refs.registerCustomer.validate()) {
            return
          }
          break

        case 6:
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

            // end loading bar
            this.$nuxt.$loading.finish()

            // redirect to thank you page
            this.$router.push({ path: '/', query: { thanks: true } })
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
