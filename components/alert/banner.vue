<template>
  <div class="relative bg-wf-purple">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden">
            {{ description }}
          </span>
          <span class="hidden md:inline">
            {{ description }}
          </span>
          <span class="block sm:ml-2 sm:inline-block">
            <NuxtLink v-bind:to="to" class="text-white font-bold underline">
              Lees meer ➡️
            </NuxtLink>
          </span>
        </p>
      </div>
      <div
        class="
          absolute
          inset-y-0
          right-0
          pt-1
          pr-1
          flex
          items-start
          sm:pt-1 sm:pr-2 sm:items-start
        "
      >
        <button
          @click="$emit('click')"
          type="button"
          class="
            flex
            p-2
            rounded-md
            hover:bg-wf-orange
            focus:outline-none focus:ring-2 focus:ring-white
          "
        >
          <span class="sr-only">Sluiten</span>
          <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from '@vue-hero-icons/outline'

export default {
  props: ['description', 'to'],
  components: {
    XIcon,
  },
}
</script>