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
                  to="/mijn-zoekopdracht"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Mijn zoekopdracht
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
              <li>
                <NuxtLink
                  to="/over-ons"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Over ons
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/nieuws"
                  class="text-base text-gray-400 hover:text-gray-300"
                >
                  Nieuws
                </NuxtLink>
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
        class="
          mt-8
          border-t border-gray-700
          pt-8
          md:flex
          md:items-center
          md:justify-between
        "
      >
        <div class="flex space-x-6 md:order-2">
          <a
            href="https://woningfinder.nl/nieuws"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Nieuws</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"
              />
            </svg>
          </a>

          <a
            href="https://instagram.com/woningfinder"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Instagram</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/company/woningfinder"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Linkedin</span>
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