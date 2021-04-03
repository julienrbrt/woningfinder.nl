<template>
  <div class="mt-2 rounded-md bg-gray-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- img -->
        <slot />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['description'],
}
</script>