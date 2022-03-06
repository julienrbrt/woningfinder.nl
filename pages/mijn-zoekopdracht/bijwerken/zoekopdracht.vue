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

    <!-- registration steps -->

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
  middleware: 'auth',
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering', { progress: true })
    return { offering }
  },
  data() {
    return {
      title: 'Mijn zoekopdracht bijwerken',
      submitted: false,
      error: false,
      errorMsg:
        'Er is iets misgegaan. Controleer het formulier nogmaals. Blijf dit gebeuren? Neem dan contact met ons op.',
      currentStep: 1,
      totalStep: 4,
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
        return 'Bijwerken'
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

          if (!this.submitted) {
            // start loading bar
            this.$nuxt.$loading.start()

            // send request
            await this.submit()
            this.submitted = true

            if (!this.error) {
              // end loading bar
              this.$nuxt.$loading.finish()

              // push to route
              this.$router.push('/mijn-zoekopdracht')
              break
            }
          }

          return
      }

      this.next()
    },
    async submit() {
      await this.$axios
        .$post(
          '/me/housing-preferences',
          this.$store.getters['register/getRegister'].housing_preferences,
          {
            headers: {
              Authorization: this.$cookies.get('auth'),
            },
          }
        )
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
