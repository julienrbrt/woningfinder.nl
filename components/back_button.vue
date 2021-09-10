<template>
  <NuxtLink
    :to="getRoute()"
    class="
      whitespace-nowrap
      text-base
      font-medium
      text-gray-500
      hover:text-gray-900
    "
    >Terug
  </NuxtLink>
</template>

<script>
export default {
  props: ['overwrite'],
  methods: {
    getRoute() {
      if (this.overwrite) {
        return this.overwrite
      }

      var from = this.$nuxt.context.from
      if (!from || from.name == this.$nuxt.$route.name) {
        return '/'
      }

      return from
    },
  },
}
</script>