<template>
  <div class="mt-6 card bg-white shadow">
    <div class="card-body">
      <h1 class="card-title text-xl text-wf-puple">Je laaste reacties</h1>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
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
              :src="
                match.picture_url != ''
                  ? 'https://api.woningfinder.nl/match/' + match.picture_url
                  : 'https://woningfinder.nl/img-1.png'
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

      <p class="mt-4 text-sm text-gray-500">
        Je kunt altijd al je woningreacties vinden in je wekelijkse e-mail
        update.
      </p>
    </div>
  </div>
</template>

<script>
export default {
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