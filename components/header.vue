<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between">
        <div class="inline-flex items-center">
          <Logo />
          <div class="hidden ml-10 mt-2 space-x-8 lg:block">
            <NuxtLink
              v-for="link in navigation"
              :key="link.name"
              :to="link.path"
              class="text-base font-medium text-wf-purple hover:text-wf-orange"
              v-bind:class="
                link.path == route ? 'text-wf-orange hover:text-wf-purple' : ''
              "
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div v-if="!isLoggedIn()" class="ml-10 space-x-4 inline-flex">
          <NuxtLink to="/start" class="btn w-max py-2">Aanmelden</NuxtLink>
          <NuxtLink
            to="/login"
            class="
              hidden
              sm:block
              btn
              w-max
              bg-wf-purple
              hover:bg-wf-purple-dark hover:ring-wf-purple
              focus:ring-wf-purple
              py-2
            "
            >Inloggen</NuxtLink
          >
        </div>
        <div v-else class="ml-10 space-x-4">
          <NuxtLink to="/mijn-zoekopdracht" class="btn w-max py-2"
            >Mijn zoekopdracht</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      route: $nuxt.$route.path,
      navigation: [
        { name: 'Hoe werkt het', path: '/' },
        { name: 'Aanbod', path: '/aanbod' },
        { name: 'Nieuws', path: '/nieuws' },
        { name: 'Contact', path: '/contact' },
      ],
    }
  },
  methods: {
    isLoggedIn() {
      return this.$cookies.get('auth') !== undefined
    },
  },
}
</script>