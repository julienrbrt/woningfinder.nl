<template>
  <div class="alert shadow-md alert-error">
    <div class="text-gray-900">
      <XCircleIcon class="h-6 w-6" />
      <span>{{ alert }}</span>
    </div>
    <div class="flex-none">
      <button @click="$emit('click')" class="btn btn-sm btn-ghost">
        <span class="sr-only">Ok</span>
        <XIcon />
      </button>
    </div>
  </div>
</template>

<script>
import { XCircleIcon, XIcon } from '@vue-hero-icons/solid'

export default {
  props: ['alert'],
  components: {
    XCircleIcon,
    XIcon,
  },
}
</script>