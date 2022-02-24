<template>
  <a @click="$emit('click')" class="block hover:bg-gray-50 cursor-pointer">
    <div class="px-6 py-4 flex items-center">
      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="truncate">
          <p class="font-medium text-wf-orange truncate">
            {{ credentials.corporation_name }}
          </p>
          <div class="mt-2 flex">
            <div class="flex items-center text-sm text-gray-500">
              <ExternalLinkIcon
                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              />
              <a
                :href="credentials.corporation_url"
                target="_blank"
                class="text-sm"
                >{{ corporationTitle(credentials.corporation_url) }}
              </a>
            </div>
          </div>
        </div>
        <div
          v-if="!credentials.is_known"
          class="hidden sm:block flex-shrink-0 mt-0 ml-5"
        >
          <p class="text-sm text-gray-700">Inloggen</p>
        </div>
      </div>
      <div class="ml-5 flex-shrink-0">
        <CheckCircleIcon
          v-if="credentials.is_known"
          size="2x"
          class="text-green-500"
        />
        <ChevronRightIcon v-else class="h-5 w-5 text-gray-500" />
      </div>
    </div>
  </a>
</template>

<script>
import {
  ExternalLinkIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@vue-hero-icons/outline'

export default {
  components: {
    ExternalLinkIcon,
    ChevronRightIcon,
    CheckCircleIcon,
  },
  props: ['credentials'],
  methods: {
    corporationTitle(url) {
      return url.substring('https://'.length)
    },
  },
}
</script>