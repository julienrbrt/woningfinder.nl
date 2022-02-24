<template>
  <div class="navbar bg-white p-6 md:px-16">
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
          <MenuAlt1Icon class="h-6 w-6 text-gray-900" />
        </label>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-gray-50 rounded-box w-52"
        >
          <li v-for="link in navigation" :key="link.name">
            <NuxtLink :to="link.path" class="text-gray-500">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <Logo class="hidden lg:flex" />
    </div>

    <div class="navbar-center flex lg:hidden">
      <Logo />
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li v-for="link in navigation" :key="link.name">
          <NuxtLink
            :to="link.path"
            class="text-gray-900"
            v-bind:class="link.path == route ? 'text-wf-orange ' : ''"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink v-if="!isLoggedIn()" to="/login" class="btn btn-secondary">
        <span class="hidden sm:block">Inloggen</span>
        <LoginIcon class="block sm:hidden h-6 w-6 text-white" />
      </NuxtLink>
      <NuxtLink v-else to="/mijn-zoekopdracht" class="btn btn-secondary">
        <span class="hidden sm:block">Mijn zoekopdracht</span>
        <UserIcon class="block sm:hidden h-6 w-6 text-white" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { MenuAlt1Icon, LoginIcon, UserIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    MenuAlt1Icon,
    LoginIcon,
    UserIcon,
  },
  data() {
    return {
      route: this.$nuxt.$route.path,
      navigation: [
        { name: 'Homepagina', path: '/' },
        { name: 'Aanbod', path: '/aanbod' },
        { name: 'Nieuws', path: '/nieuws' },
        { name: 'Over ons', path: '/over-ons' },
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