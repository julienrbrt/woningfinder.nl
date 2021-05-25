<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Waar zoek je jouw woning?</p>
    <select
      v-model="selected"
      id="location"
      name="location"
      class="mt-4 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-wf-orange focus:border-wf-orange rounded-md"
      @change="addCity(selected)"
    >
      <option disabled value="">
        Beschikbare steden ({{ citiesList.length }})
      </option>
      <option v-for="city in citiesList" :key="city.name">
        {{ city.name }}
      </option>
    </select>

    <div class="mt-6 space-y-4">
      <div
        v-if="!hasSelection"
        class="rounded-md p-4"
        v-bind:class="error ? 'bg-red-50' : 'bg-gray-50'"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon
              class="h-5 w-5"
              v-bind:class="error ? 'text-red-400' : 'text-gray-400'"
            />
          </div>
          <div class="ml-3">
            <p
              class="text-sm font-medium"
              v-bind:class="error ? 'text-red-800' : 'text-gray-800'"
            >
              Je hebt geen steden geselecteerd.
            </p>
            <p
              class="text-sm font-medium"
              v-bind:class="error ? 'text-red-800' : 'text-gray-800'"
            >
              Staat je stad er niet tussen? Schrijf je in op onze
              <NuxtLink to="/wachtlijst" class="underline" @click="waitingList"
                >wachtlijst</NuxtLink
              >
              en we laten je weten wanneer we jouw stad toegevoegd hebben.
            </p>
          </div>
        </div>
      </div>

      <!-- city selection-->
      <div
        v-for="city in citiesSelection"
        :key="city.name"
        class="relative flex items-center rounded-lg border border-gray-400 bg-white shadow-sm px-6 py-2 justify-between"
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
      error: false,
    }
  },
  methods: {
    addCity() {
      this.$store.commit('register/addCity', this.selected)
      this.citiesList = this.citiesList.filter((c) => c.name !== this.selected)
      this.selected = ''
    },
    removeCity(selected) {
      this.$store.commit('register/removeCity', selected)
      this.citiesList.push(selected)
      this.citiesList = this.citiesList.sort((a, b) =>
        a.name > b.name ? 1 : -1
      )
    },
    validate() {
      if (this.$store.getters['register/getCities'].length == 0) {
        this.error = true
        return false
      }

      return true
    },
    waitingList() {
      this.saEvent('waiting_list_form_clicked')
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