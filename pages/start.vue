<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Je WoningFinder zoekopdracht
          </h1>
        </div>

        <!-- registration components -->
        <component
          :is="registrationFlow[currentPage]"
          :offering="offering"
        ></component>

        <!-- buttons -->
        <div class="items-center w-full inline-flex mt-5 space-x-4">
          <div v-if="currentPage == 0">
            <NuxtLink
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
            {{ currentPage + 1 }} / {{ registrationFlow.length }}
          </p>
        </div>
      </Hero>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const offering = await $axios.$get('offering')
    return { offering }
  },
  methods: {
    nextButtonText() {
      if (this.registrationFlow[this.currentPage] == 'RegisterStep3') {
        return 'Aanmelden'
      }

      return 'Volgende'
    },
    next() {
      if (this.currentPage + 1 < this.registrationFlow.length) {
        this.currentPage++
      }
    },
    previous() {
      if (this.currentPage > 0) {
        this.currentPage--
      }
    },
  },
  data() {
    return {
      currentPage: 0,
      registrationFlow: [`RegisterStep1`, `RegisterStep2`, `RegisterStep3`],
    }
  },
}
</script>
