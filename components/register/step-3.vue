<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Heb je een wijk voorkeur?</p>

    <div class="md:overflow-scroll md:max-h-72 mt-6 space-y-4">
      <div
        v-for="city in selectedCities"
        :key="city.name"
        class="relative flex rounded-lg border border-gray-400 bg-white shadow-sm px-6 py-4 sm:justify-between"
      >
        <p class="text-sm font-medium text-gray-900">
          {{ city.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['offering'],
  data() {
    return {
      selectedCities: this.$store.getters['register/getCities'],
    }
  },
}
</script>