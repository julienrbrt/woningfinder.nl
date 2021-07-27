<template>
  <a class="cursor-pointer" :href="website" target="_blank">
    <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-md">
      <img
        class="max-h-12"
        :src="`https://static.woningfinder.nl/woningcorporaties/${image}`"
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