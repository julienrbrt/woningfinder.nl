<template>
  <footer class="mt-24 bg-gray-900 sm:mt-12">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              Ontdek
            </h3>
            <ul class="mt-4 space-y-4">
              <li v-for="link in discover" :key="link.name">
                <NuxtLink
                  :to="link.path"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              WoningFinder
            </h3>
            <ul class="mt-4 space-y-4">
              <li v-for="link in woningfinder" :key="link.name">
                <NuxtLink
                  :to="link.path"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              Voorwaarden
            </h3>
            <ul class="mt-4 space-y-4">
              <li v-for="link in terms" :key="link.name">
                <NuxtLink
                  :to="link.path"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="
          flex
          mt-4
          border-t border-gray-700
          pt-4
          items-center
          justify-center
        "
      >
        <p class="text-base text-gray-400">
          &copy; {{ new Date().getFullYear() }}
          <a href="https://julien.rbrt.fr" target="_blank">julien.rbrt.fr</a>
        </p>
      </div>
    </div>
  </footer>
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
        { name: 'Nieuws', path: '/nieuws' },
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