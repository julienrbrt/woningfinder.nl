<template>
  <div>
    <p v-if="city.district" class="mt-2 text-base text-gray-500">
      Er zijn {{ city.district.length }} voorgestelde wijken voor deze stad.
    </p>

    <autocomplete
      class="mt-4"
      :search="selectDistrict"
      ref="autocomplete"
      type="text"
      placeholder="Zoek buurt, wijk, etc."
      aria-label="Zoek buurt, wijk, etc."
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
      alert="Je hebt nog geen wijk voorkeur. WoningFinder reageert daarom over de hele stad."
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
      suggestedDistricts: this.city.district,
    }
  },
  methods: {
    async selectDistrict(input) {
      var result = []

      // use city districts from offering
      if (this.suggestedDistricts) {
        if (input.length == 0) {
          // show everything
          for (var i = 0; i < this.suggestedDistricts.length; i++) {
            result.push(this.suggestedDistricts[i])
          }

          return result
        } else {
          // show selection only
          for (var i = 0; i < this.suggestedDistricts.length; i++) {
            if (
              this.suggestedDistricts[i]
                .toLowerCase()
                .includes(input.toLowerCase())
            ) {
              result.push(this.suggestedDistricts[i])
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
            proximity: [this.city.longitude, this.city.latitude],
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

        this.$refs.autocomplete.setValue('')
        document.activeElement.blur() // remove focus
        this.$forceUpdate() // force update (required as not reactive when editing)
      }
    },
    removeCityDistrict(selected) {
      if (selected) {
        this.$store.commit('register/removeCityDistrict', {
          city: this.city,
          district: selected,
        })
      }
      this.$forceUpdate() // force update (required as not reactive when editing)
    },
  },
  computed: {
    getCity() {
      var city = this.$store.getters['register/getCity'](this.city)
      if (!city.district) {
        city.district = []
      }

      return city
    },
  },
}
</script>