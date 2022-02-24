<template>
  <div class="alert shadow-md alert-success">
    <div class="text-gray-900">
      <div class="w-max">
        <CheckCircleIcon class="h-5 w-5" />
      </div>
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
import { CheckCircleIcon, XIcon } from '@vue-hero-icons/solid'

export default {
  props: ['alert'],
  components: {
    CheckCircleIcon,
    XIcon,
  },
}
</script>