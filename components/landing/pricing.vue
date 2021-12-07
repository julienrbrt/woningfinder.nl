<template>
  <div class="bg-wf-purple">
    <div class="pt-12 sm:pt-16">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2
            class="
              text-lg
              leading-6
              font-semibold
              text-gray-300
              uppercase
              tracking-wider
            "
          >
            Kosten
          </h2>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-gray-50">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-wf-purple"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                  Gratis
                  <span class="ml-1 text-2xl font-medium text-gray-500">
                    voor altijd
                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  Reageert op alle sociale en vrije sector huurwoningen
                </p>
              </div>
              <div
                class="
                  flex-1 flex flex-col
                  justify-between
                  px-6
                  pt-6
                  pb-8
                  bg-gray-50
                  space-y-6
                  sm:p-10 sm:pt-6
                "
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="h-6 w-6 text-green-500" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Sociale huurwoningen reacties
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="h-6 w-6 text-green-500" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Vrije sector huurwoningen reacties
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="h-6 w-6 text-green-500" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Persoonlijke zoekopdracht
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="h-6 w-6 text-green-500" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Wekelijkse update
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <div class="rounded-md shadow">
                    <NuxtLink
                      to="/start"
                      class="
                        btn
                        bg-wf-orange
                        hover:bg-wf-orange-dark hover:ring-wf-orange
                        focus:ring-wf-orange
                      "
                    >
                      Nu starten
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { CheckIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    CheckIcon,
  },
}
</script>
