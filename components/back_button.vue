<template>
  <NuxtLink :to="getRoute()" class="btn btn-ghost text-gray-500"
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