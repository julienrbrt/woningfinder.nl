<template>
  <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 mt-4 mb-2 sm:px-6">
      <h1 class="text-xl text-gray-900">Instellingen</h1>
    </div>
    <div class="-mt-2 px-4 py-4 flex items-center sm:px-6">
      <ul>
        <li class="text-gray-500">
          Hoi {{ customer.name }}, binnenkort kun je hier je zoekopdracht
          bijwerken. Wil je nu al iets wijzigen aan je zoekopdracht? Neem dan
          <NuxtLink to="contact" class="underline">contact</NuxtLink> met ons
          op.
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