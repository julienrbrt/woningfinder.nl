<template>
  <div>
    <div v-if="districtsList">
      <select
        v-model="selected"
        id="city-districts"
        name="city-districts"
        class="mt-4 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-wf-orange focus:border-wf-orange rounded-md"
        v-on:change="addCityDistrict"
      >
        <option disabled value="">
          Beschikbare wijken ({{ districtsList.length }})
        </option>
        <option v-for="district in districtsList" :key="district.name">
          {{ district.name }}
        </option>
      </select>

      <div v-if="hasSelection" class="mt-6 space-y-4">
        <!-- district selection-->
        <div
          v-for="district in getCity.district"
          :key="district.name"
          class="relative flex items-center rounded-lg border border-gray-400 bg-white shadow-sm px-6 py-2 sm:justify-between"
        >
          <p class="text-sm font-medium text-gray-900">
            {{ district.name }}
          </p>
          <button
            @click="removeCityDistrict(district.name)"
            type="button"
            class="inline-flex rounded-md p-1.5 text-gray-300 hover:text-red-300 focus:outline-none"
          >
            <XIcon size="1.5x" />
          </button>
        </div>
      </div>

      <AlertInfo v-else description="Je hebt nog geen wijk voorkeur">
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>
    </div>

    <AlertInfo
      v-else
      description="Er is geen wijk selectie mogelijk voor dit stad"
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
  </div>
</template>

<script>
import { InformationCircleIcon, XIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
    XIcon,
  },
  props: ['city'],
  data() {
    return {
      selected: '',
      districtsList: this.city.district,
    }
  },
  methods: {
    addCityDistrict() {
      if (this.selected) {
        this.$store.commit('register/addCityDistrict', {
          city: this.city,
          district: this.selected,
        })
        this.districtsList = this.districtsList.filter(
          (c) => c.name !== this.selected
        )
        this.selected = ''
      }
    },
    removeCityDistrict(selected) {
      if (selected) {
        this.$store.commit('register/removeCityDistrict', {
          city: this.city,
          district: selected,
        })
        this.districtsList.push({ name: selected })
        this.districtsList = this.districtsList.sort((a, b) =>
          a.name > b.name ? 1 : -1
        )
      }
    },
  },
  computed: {
    getCity() {
      return this.$store.getters['register/getCity'](this.city)
    },
    hasSelection() {
      return this.getCity.district.length > 0
    },
  },
}
</script>