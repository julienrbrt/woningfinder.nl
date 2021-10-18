<template>
  <NuxtLink :to="{ path: '/start/voltooien', query: { email: email } }">
    <div class="flex flex-col items-center">
      <div class="mt-4 rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <XCircleIcon class="h-5 w-5 text-red-400" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              Let op: Je hebt je zoekopdracht nog niet voltooid. Je reageert dus
              niet automatisch op woningen.
              <span class="underline hover:text-gray-900">Nu voltooien</span> 👈
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import { XCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    XCircleIcon,
  },
  props: ['email'],
}
</script>