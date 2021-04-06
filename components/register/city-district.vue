<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      We kunnen reageren op woningen in de wijk die je wilt. Als je een wijk
      voorkeur hebt, kun je dat nu invullen, anders kun je deze stap overslaan.
    </p>

    <div class="mt-6 space-y-4">
      <div v-for="city in citiesSelection" :key="city.name">
        <h2 class="text-base font-medium text-gray-900">
          {{ city.name }}
        </h2>

        <RegisterCityDistrictPicker :city="getCityFromOffering(city)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['supported_cities'],
  methods: {
    getCityFromOffering(city) {
      return this.supported_cities.find((c) => c.name === city.name)
    },
  },
  computed: {
    citiesSelection() {
      return this.$store.getters['register/getCities']
    },
  },
}
</script>