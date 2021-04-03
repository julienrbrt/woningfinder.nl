<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      In welke stad heb je een wijk voorkeur? Als je geen wijk voorkeur hebt, je
      kunt gewoon overslaan.
    </p>

    <div class="md:overflow-scroll md:max-h-96 mt-6 space-y-4">
      <div v-for="city in citiesSelection" :key="city.name">
        <h2 class="text-base font-medium text-gray-900">
          {{ city.name }}
        </h2>

        <select
          v-model="selected"
          id="location"
          name="location"
          class="mt-4 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-wf-orange focus:border-wf-orange rounded-md"
          v-on:change="addDistrict"
        >
          <option disabled value="">
            Beschikbare wijken ({{ city.district.length }})
          </option>
          <option v-for="district in city.district" :key="district.name">
            {{ district.name }}
          </option>
        </select>

        <div v-if="!hasSelection(city)" class="mt-2 rounded-md bg-gray-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <InformationCircleIcon class="h-5 w-5 text-gray-400" />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                Je heeft nog geen wijk voorkeuren
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  props: ['supported_cities'],
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    hasSelection(city) {
      return this.citiesSelection.filter((c) => {
        c.name == city.name
      }).length
    },
    addDistrict() {},
    removeDistrict(city) {},
  },
  computed: {
    citiesSelection() {
      return this.$store.getters['register/getCities']
    },
  },
}
</script>