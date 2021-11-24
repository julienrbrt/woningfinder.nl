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
          mt-8
          border-t border-gray-700
          pt-8
          md:flex md:items-center md:justify-between
        "
      >
        <div class="flex space-x-6 md:order-2">
          <a
            href="https://linkedin.com/company/woningfinder"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; {{ new Date().getFullYear() }} WoningFinder B.V.
          <br />
          <span class="text-sm">KVK nr. 81619766</span>
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