<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Waar zoek je jouw woning?</p>
    <select
      v-model="selected"
      id="location"
      name="location"
      class="mt-4 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-wf-orange focus:border-wf-orange rounded-md"
      v-on:change="addCity"
    >
      <option disabled value="">
        Beschikbare steden ({{ citiesList.length }})
      </option>
      <option v-for="city in citiesList" :key="city.name">
        {{ city.name }}
      </option>
    </select>

    <div class="md:overflow-scroll md:max-h-72 mt-6 space-y-4">
      <div v-if="!hasSelection" class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon class="h-5 w-5 text-red-400" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              Je hebt geen steden geselecteerd
            </p>
            <p class="text-sm font-medium text-red-800">
              Staat je stad er niet tussen? Neem dan
              <NuxtLink to="contact" class="underline">contact</NuxtLink> met
              ons op.
            </p>
          </div>
        </div>
      </div>

      <!-- city selection-->
      <div
        v-for="city in citiesSelection"
        :key="city.name"
        class="relative flex items-center rounded-lg border border-gray-400 bg-white shadow-sm px-6 py-2 sm:justify-between"
      >
        <p class="text-sm font-medium text-gray-900">
          {{ city.name }}
        </p>
        <button
          @click="removeCity(city)"
          type="button"
          class="inline-flex rounded-md p-1.5 text-gray-300 hover:text-red-300 focus:outline-none"
        >
          <XIcon size="1.5x" />
        </button>
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
  props: ['supported_cities'],
  data() {
    return {
      selected: '',
      citiesList: this.supported_cities.sort((a, b) =>
        a.name > b.name ? 1 : -1
      ),
    }
  },
  methods: {
    addCity() {
      if (this.selected) {
        this.$store.commit('register/addCity', this.selected)
        this.citiesList = this.citiesList.filter(
          (c) => c.name !== this.selected
        )
        this.selected = ''
      }
    },
    removeCity(selected) {
      if (selected) {
        this.$store.commit('register/removeCity', selected)
        this.citiesList.push(selected)
        this.citiesList = this.citiesList.sort((a, b) =>
          a.name > b.name ? 1 : -1
        )
      }
    },
  },
  computed: {
    citiesSelection() {
      return this.$store.getters['register/getCities']
    },
    hasSelection() {
      return this.citiesSelection.length > 0
    },
  },
}
</script>