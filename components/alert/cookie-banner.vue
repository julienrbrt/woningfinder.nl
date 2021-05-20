<template>
  <div class="fixed z-50 inset-x-0 top-0 p-2">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-wf-orange shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-wf-purple">
              <SpeakerphoneIcon class="h-5 w-5 text-white" />
            </span>
            <p class="ml-3 font-medium text-white">
              <span class="inline">
                We gebruiken functionele cookies om de beste ervaring te bieden.
                <NuxtLink to="/voorwaarden/privacy" class="underline"
                  >Meer informatie over cookies</NuxtLink
                >.
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <a
              @click="$emit('click')"
              class="cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-wf-purple bg-white hover:text-white hover:bg-wf-purple"
            >
              Akkoord
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              @click="$emit('click')"
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-wf-purple focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Sluit</span>
              <XIcon class="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },
}
</script>

<style>
</style>