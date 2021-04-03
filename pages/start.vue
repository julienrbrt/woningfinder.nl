<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Je WoningFinder zoekopdracht
          </h1>
        </div>

        <!-- registration steps -->
        <RegisterPlan v-show="currentStep == 1" />

        <RegisterCity
          v-show="currentStep == 2"
          :supported_cities="offering.supported_cities"
        />

        <RegisterCityDistrict
          v-show="currentStep == 3"
          :supported_cities="offering.supported_cities"
        />

        <!-- buttons -->
        <div class="items-center w-full inline-flex mt-5 space-x-4">
          <div v-if="currentStep == 1">
            <NuxtLink
              @click.native="resetForm"
              to="/"
              class="cursor-pointer whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Terug
            </NuxtLink>
          </div>
          <div v-else>
            <a
              @click="previous"
              class="cursor-pointer whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Terug
            </a>
          </div>

          <a @click="next" class="btn w-min">{{ nextButtonText() }}</a>
          <p
            class="flex-1 whitespace-nowrap text-sm font-medium text-gray-400 text-right self-end"
          >
            {{ currentStep }} / {{ totalStep }}
          </p>
        </div>
      </Hero>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering')
    return { offering }
  },
  data() {
    return {
      currentStep: 1,
      totalStep: 5,
    }
  },
  methods: {
    nextButtonText() {
      if (this.currentStep == this.totalStep) {
        return 'Aanmelden'
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
    resetForm() {
      this.$store.commit('register/reset')
    },
  },
}
</script>
