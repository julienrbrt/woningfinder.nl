<template>
  <div>
    <autocomplete
      class="mt-4"
      :search="selectDistrict"
      ref="autocomplete"
      type="text"
      :placeholder="
        !districtsList
          ? 'Geen voorgestelde wijken'
          : 'Voorgestelde wijken (' + districtsList.length + ')'
      "
      aria-label="Voorgestelde wijken"
      :debounce-time="200"
      @submit="addCityDistrict"
      auto-select
    ></autocomplete>

    <div v-if="getCity.district.length > 0" class="mt-6 space-y-4">
      <!-- district selection-->
      <div
        v-for="district in getCity.district"
        :key="district"
        class="
          relative
          flex
          items-center
          rounded-lg
          border border-gray-400
          bg-white
          shadow-sm
          px-6
          py-2
          justify-between
        "
      >
        <p class="text-sm font-medium text-gray-900">
          {{ district }}
        </p>
        <button
          @click="removeCityDistrict(district)"
          type="button"
          class="
            inline-flex
            rounded-md
            p-1.5
            text-gray-300
            hover:text-red-300
            focus:outline-none
          "
        >
          <XIcon size="1.5x" />
        </button>
      </div>
    </div>

    <AlertInfo
      class="mt-4"
      v-else
      description="Je hebt nog geen wijk voorkeur. WoningFinder reageert daarom over de hele stad."
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
  </div>
</template>

<script>
import { InformationCircleIcon, XIcon } from '@vue-hero-icons/solid'

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingService = mbxGeocoding({ accessToken: process.env.mapboxKey })

export default {
  components: {
    InformationCircleIcon,
    XIcon,
  },
  props: ['city'],
  data() {
    return {
      districtsList: this.city.district,
    }
  },
  methods: {
    async selectDistrict(input) {
      var result = []

      // use city districts from offering
      if (this.districtsList) {
        if (input.length == 0) {
          // show everything
          for (var i = 0; i < this.districtsList.length; i++) {
            result.push(this.districtsList[i])
          }

          return result
        } else {
          // show selection only
          for (var i = 0; i < this.districtsList.length; i++) {
            if (
              this.districtsList[i].toLowerCase().includes(input.toLowerCase())
            ) {
              result.push(this.districtsList[i])
            }
          }
        }
      }

      if (input.length > 0) {
        // enrich with mapbox
        const response = await geocodingService
          .forwardGeocode({
            query: input,
            countries: ['nl'],
            proximity: this.city.coordinates,
            types: ['neighborhood', 'locality'],
            autocomplete: true,
            language: ['nl-NL'],
          })
          .send()

        const match = response.body
        for (var i = 0; i < match.features.length; i++) {
          if (match.features[i].place_name.includes(this.city.name)) {
            result.push(this.districtWithoutCity(match.features[i].place_name))
          }
        }
      }

      return result
    },
    districtWithoutCity(name) {
      return name.split(',', 1)[0]
    },
    addCityDistrict(selected) {
      if (selected) {
        this.$store.commit('register/addCityDistrict', {
          city: this.city,
          district: selected,
        })

        if (this.districtsList) {
          this.districtsList = this.districtsList.filter((d) => d !== selected)
        }

        this.$refs.autocomplete.setValue('')
      }
    },
    removeCityDistrict(selected) {
      if (selected) {
        this.$store.commit('register/removeCityDistrict', {
          city: this.city,
          district: selected,
        })

        if (this.districtsList) {
          this.districtsList.push(selected)
          this.districtsList = this.districtsList.sort((d1, d2) =>
            d1 > d2 ? 1 : -1
          )
        }
      }
    },
  },
  computed: {
    getCity() {
      return this.$store.getters['register/getCity'](this.city)
    },
  },
}
</script>