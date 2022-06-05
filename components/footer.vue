<template>
  <div class="pt-4">
    <div class="bg-gray-900 text-gray-400 md:px-16">
      <footer class="p-10 footer">
        <div>
          <span class="footer-title">Ontdek</span>
          <NuxtLink
            v-for="link in discover"
            :key="link.name"
            :to="link.path"
            class="text-base hover:text-gray-300"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div>
          <span class="footer-title">WoningFinder</span>
          <NuxtLink
            v-for="link in woningfinder"
            :key="link.name"
            :to="link.path"
            class="text-base hover:text-gray-300"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div>
          <span class="footer-title">Voorwaarden</span>
          <NuxtLink
            v-for="link in terms"
            :key="link.name"
            :to="link.path"
            class="text-base hover:text-gray-300"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </footer>
      <footer class="px-10 py-4 border-t footer border-gray-700 justify-center">
        <div class="items-center grid-flow-col">
          <p class="text-base">
            &copy; {{ new Date().getFullYear() }}
            <a href="https://julien.rbrt.fr" target="_blank">julien.rbrt.fr</a>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discover: [
        { name: 'Nu starten', path: '/start' },
        { name: 'Inloggen', path: '/login' },
        { name: 'Aanbod', path: '/aanbod' },
        { name: 'Wachtlijst', path: '/wachtlijst' },
      ],
      woningfinder: [
        { name: 'Contact', path: '/contact' },
        { name: 'Over ons', path: '/over-ons' },
      ],
      terms: [
        { name: 'Algemene voorwaarden', path: '/voorwaarden' },
        { name: 'Gebruiksvoorwaarden', path: '/voorwaarden/gebruiks' },
        { name: 'Privacy', path: '/voorwaarden/privacy' },
      ],
    }
  },
}
</script>