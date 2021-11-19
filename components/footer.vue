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

          <a
            href="https://github.com/woningfinder"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
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