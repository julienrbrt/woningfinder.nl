<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Waar zoek je jouw woning?</p>
    <select
      v-model="selected"
      id="location"
      name="location"
      class="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-wf-orange focus:border-wf-orange rounded-md"
      v-on:change="addCity"
    >
      <option disabled value="">Beschikbare steden</option>
      <option v-for="city in sortedCities" :key="city">{{ city }}</option>
    </select>

    <div class="md:overflow-scroll md:max-h-72 mt-6 space-y-4">
      <div v-if="!hasSelectedCities" class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon class="h-5 w-5 text-red-400" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              Je hebt geen steden geselecteerd
            </p>
          </div>
        </div>
      </div>

      <div
        v-for="city in selectedCities"
        :key="city"
        class="relative flex rounded-lg border border-gray-400 bg-white shadow-sm px-6 py-4 sm:justify-between"
      >
        <p class="text-sm font-medium text-gray-900">
          {{ city }}
        </p>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              @click="removeCity(city)"
              type="button"
              class="inline-flex rounded-md p-1.5 text-gray-300 hover:text-red-300 focus:outline-none"
            >
              <XIcon size="1x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    XIcon,
    InformationCircleIcon,
  },
  props: ['offering'],
  data() {
    return {
      selected: '',
      selectedCities: [],
      sortedCities: this.offering.supported_cities.sort(),
    }
  },
  methods: {
    addCity() {
      if (this.selected) {
        this.selectedCities.push(this.selected)
        this.sortedCities = this.sortedCities.filter((c) => c !== this.selected)
        this.selected = ''
        this.$store.commit('register/setCities', this.selectedCities)
      }
    },
    removeCity(city) {
      if (city) {
        this.sortedCities.push(city)
        this.sortedCities.sort()
        this.selectedCities = this.selectedCities.filter((c) => c !== city)
      }
    },
  },
  computed: {
    hasSelectedCities() {
      return this.selectedCities.length > 0
    },
  },
}
</script>