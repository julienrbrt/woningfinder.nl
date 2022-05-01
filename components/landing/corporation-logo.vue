<template>
  <a class="cursor-pointer" :href="website" target="_blank">
    <div
      class="
        tooltip
        col-span-1
        flex
        justify-center
        py-8
        px-8
        bg-gray-50
        rounded-lg
      "
      :data-tip="name"
    >
      <img
        class="max-h-12"
        :src="require(`~/assets/img/corporation/${image}`)"
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