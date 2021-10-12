<template>
  <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 mt-4 mb-2 sm:px-6">
      <h1 class="text-xl text-wf-puple">Je laaste reacties</h1>
    </div>

    <div v-if="housing_preferences_match.length > 0">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 m-4">
        <a
          v-for="match in housing_preferences_match.slice().reverse()"
          :key="match.housing_address"
          :href="match.offer_url"
          target="_blank"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              bg-gray-200
              rounded-lg
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <img
              v-if="match.picture_url != ''"
              :src="
                match.picture_url != ''
                  ? 'https://static.woningfinder.nl/' + match.picture_url
                  : 'https://static.woningfinder.nl/email/img-1.png'
              "
              alt="img"
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <p class="mt-4 text-sm text-gray-500">
            {{ match.corporation_name }}
            <br />
            Gereageerd op {{ formatDate(match.created_at) }}
          </p>
          <h3 class="mt-1 text-sm text-gray-900">
            {{ match.housing_address }}
          </h3>
        </a>
      </div>

      <p class="px-4 mt-2 mb-4 sm:px-6 text-sm text-gray-500">
        Je kunt altijd al je woningreacties vinden in je wekelijkse e-mail
        update.
      </p>
    </div>

    <AlertInfo
      v-else
      class="m-4"
      description="Er zijn nog geen automatisch reacties"
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  props: ['housing_preferences_match'],
  methods: {
    formatDate(date) {
      date = new Date(date)

      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return day + '-' + month + '-' + year
    },
  },
}
</script>