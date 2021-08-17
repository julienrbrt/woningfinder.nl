<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      Je kan WoningFinder laten reageren op woningen in de wijk en/of buurt die
      je wilt. Als je een wijk voorkeur hebt, kun je dat nu invullen, anders kun
      je deze stap overslaan.
    </p>

    <div class="mt-6 space-y-4">
      <div v-for="city in getCities" :key="city.name">
        <h2 class="text-base font-medium text-gray-900">
          {{ city.name }}
        </h2>

        <RegisterCityDistrictPicker
          :city="getCityFromOffering(city)"
          :advanced="advanced"
        />
      </div>
    </div>

    <div class="mt-4 inline-flex">
      <input
        v-model="advanced"
        id="advanced-district-display"
        name="advanced-district-display"
        type="checkbox"
        class="
          focus:ring-wf-orange
          h-4
          w-4
          text-wf-orange-dark
          border-gray-300
          rounded
        "
      />
      <label
        for="advanced-district-display"
        class="block text-sm font-medium text-gray-900 ml-3"
        >Bekijk buurten i.p.v. wijken indien beschikbaar</label
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['supported_cities'],
  data() {
    return {
      advanced: false,
    }
  },
  methods: {
    getCityFromOffering(city) {
      return this.supported_cities.find((c) => c.name === city.name)
    },
  },
  computed: {
    getCities() {
      return this.$store.getters['register/getCities']
    },
  },
}
</script>