<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Waar zoek je jouw woning?</p>
    <p class="mt-2 text-base text-gray-500">
      Je kunt je gewenste steden selecteren en invullen tussen ons
      {{ supported_cities.length }} beschikbare steden.
    </p>

    <autocomplete
      class="mt-4"
      :search="selectCity"
      ref="autocomplete"
      type="text"
      placeholder="Steden selecteren of invullen"
      aria-label="Steden selecteren of invullen"
      :debounce-time="200"
      @submit="addCity"
      auto-select
    ></autocomplete>

    <AlertInfo
      v-if="!hasSelection"
      class="mt-4"
      v-bind:class="error ? 'bg-red-50' : 'bg-gray-50'"
      alert="Je hebt geen steden geselecteerd."
    >
      <InformationCircleIcon
        class="h-5 w-5"
        v-bind:class="error ? 'text-red-400' : 'text-gray-400'"
      />
    </AlertInfo>

    <!-- city selection-->
    <div class="mt-4 space-y-4">
      <div
        v-for="city in citiesSelection"
        :key="city.name"
        class="
          relative
          flex
          items-center
          rounded-lg
          border border-gray-400
          bg-white
          shadow-sm
          px-6
          py-2
          justify-between
        "
      >
        <p class="text-sm font-medium text-gray-900">
          {{ city.name }}
        </p>
        <button
          @click="removeCity(city)"
          type="button"
          class="
            inline-flex
            rounded-md
            p-1.5
            text-gray-300
            hover:text-red-300
            focus:outline-none
          "
        >
          <XIcon size="1.5x" />
        </button>
      </div>
    </div>

    <AlertInfo
      class="mt-4"
      alert='Staat je stad er niet tussen? Schrijf je in op onze
               <a
                to="/wachtlijst"
                class="underline text-gray-700 hover:text-gray-900"
                >wachtlijst</a>
              en we laten je weten wanneer we jouw stad toegevoegd hebben.'
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
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
      selectedCities: [],
      citiesList: new Map(
        this.supported_cities
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((city) => [city.name, city])
      ),
      error: false,
    }
  },
  methods: {
    selectCity(input) {
      var result = []
      if (input.length == 0) {
        this.citiesList.forEach((city, name) => {
          result.push(name)
        })
      } else {
        this.citiesList.forEach((city, name) => {
          if (name.toLowerCase().startsWith(input.toLowerCase())) {
            result.push(name)
          }
        })
      }

      return result
    },
    addCity(selected) {
      if (selected) {
        this.$store.commit('register/addCity', selected)
        this.$refs.autocomplete.setValue('')
        document.activeElement.blur() // remove focus
      }
    },
    removeCity(selected) {
      this.$store.commit('register/removeCity', selected)
    },
    validate() {
      if (this.$store.getters['register/getCities'].length == 0) {
        this.error = true
        return false
      }

      return true
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