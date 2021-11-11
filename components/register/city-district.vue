<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      Je kan WoningFinder automatisch laten reageren op woningen in de wijk
      en/of buurt die je wilt.
    </p>
    <p class="mt-2 text-base text-gray-500">
      Als je een wijk voorkeur hebt, kun je dat nu zoeken, anders kun je deze
      stap overslaan.
    </p>

    <div class="mt-6 space-y-4">
      <div v-for="city in selected_cities" :key="city.name">
        <h2 class="text-base font-medium text-gray-900">
          {{ city.name }}
        </h2>

        <RegisterCityDistrictPicker :city="city" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selected_cities'],
}
</script>