<template>
  <footer class="mt-24 bg-gray-900 sm:mt-12">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Ontdek
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <NuxtLink
                  to="/start"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Nu starten
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/woningcorporaties"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Woningcorporaties
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              WoningFinder
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <NuxtLink
                  to="/over-ons"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Over ons
                </NuxtLink>
              </li>

              <li>
                <a
                  href="https://blog.woningfinder.nl"
                  target="_blank"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Blog
                </a>
              </li>

              <li>
                <NuxtLink
                  to="/contact"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Voorwaarden
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <NuxtLink
                  to="/voorwaarden"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Algemene voorwaarden
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/voorwaarden/gebruiks"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Gebruiksvoorwaarden
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/voorwaarden/privacy"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Privacy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            href="https://blog.woningfinder.nl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Medium</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"
              />
            </svg>
          </a>

          <a
            href="https://fb.me/woningfinder"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
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
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
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