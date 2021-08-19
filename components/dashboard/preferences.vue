<template>
  <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 mt-4 mb-2 sm:px-6">
      <h1 class="text-xl text-gray-900">Instellingen</h1>
    </div>
    <div class="mt-2 mb-4 px-4 flex items-center sm:px-6">
      <ul class="text-gray-500 text-base">
        <li class="mb-2">👤 {{ customer.name }}</li>
        <li class="mb-2">✉️ {{ customer.email }}</li>
        <li class="mb-2">🗓 {{ customer.birth_year }}</li>
        <li class="text-sm">
          Binnenkort kun je hier je zoekopdracht bijwerken. Neem
          <NuxtLink to="/contact" class="underline hover:text-gray-900"
            >contact</NuxtLink
          >
          met ons op om iets nu te wijzigen.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['customer'],
}
</script>