<template>
  <a class="cursor-pointer" :href="website" target="_blank">
    <div
      class="
        has-tooltip
        col-span-1
        flex
        justify-center
        py-8
        px-8
        bg-gray-50
        rounded-md
      "
    >
      <span class="tooltip rounded p-1 bg-gray-700 text-gray-50 -mt-8">{{
        name
      }}</span>
      <img
        class="max-h-12"
        :src="`https://static.woningfinder.nl/corporations/${image}`"
        :alt="name"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ['name', 'image', 'website'],
}
</script>

<style>
.tooltip {
  @apply invisible absolute;
}

.has-tooltip:hover .tooltip {
  @apply visible z-50;
}
</style>