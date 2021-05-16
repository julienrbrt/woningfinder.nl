<template>
  <NuxtLink v-bind:to="to" class="inline-flex space-x-4 items-center">
    <span
      class="rounded bg-wf-orange-lightest px-2.5 py-1 text-xs font-semibold text-wf-orange tracking-wide uppercase"
    >
      {{ title }}
    </span>
    <span
      class="inline-flex items-center text-sm font-medium text-wf-orange space-x-1"
    >
      <span>{{ description }}</span>
      <ChevronRightIcon class="h-5 w-5" />
    </span>
  </NuxtLink>
</template>

<script>
import { ChevronRightIcon } from '@vue-hero-icons/solid'

export default {
  props: ['title', 'description', 'to'],
  components: {
    ChevronRightIcon,
  },
}
</script>
