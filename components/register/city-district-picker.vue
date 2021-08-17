<template>
  <div>
    <div v-if="city.district">
      <select
        v-model="selected"
        id="city-districts"
        name="city-districts"
        class="
          mt-4
          block
          w-full
          pl-3
          pr-10
          py-2
          text-sm
          border-gray-300
          focus:outline-none
          focus:ring-wf-orange
          focus:border-wf-orange
          rounded-md
        "
        @change="addCityDistrict"
      >
        <option disabled value="">
          Voorgestelde wijken ({{ getCityDistrict().length }})
        </option>
        <option v-for="district in getCityDistrict()" :key="district">
          {{ district }}
        </option>
      </select>

      <div
        v-if="Object.keys(getCity.district).length > 0"
        class="mt-6 space-y-4"
      >
        <!-- district selection-->
        <div
          v-for="district in Object.keys(getCity.district)"
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
        v-else
        description="Je hebt nog geen wijk voorkeur. WoningFinder reageert daarom over de hele stad."
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>
    </div>

    <AlertInfo
      v-else
      description="Er is geen wijk selectie mogelijk voor deze stad. WoningFinder reageert daarom over de hele stad."
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
  </div>
</template>

<script>
import { InformationCircleIcon, XIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
    XIcon,
  },
  props: ['city', 'advanced'],
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    getCityDistrict() {
      if (!this.city.district) {
        return null
      }

      if (this.advanced) {
        var neighbourhood = [
          ...new Set(Object.values(this.city.district).flat()),
        ].filter(function (el) {
          return el != null
        })

        if (neighbourhood.length > 0) {
          return neighbourhood
        }
      }

      return Object.keys(this.city.district)
    },
    addCityDistrict() {
      if (this.selected) {
        this.$store.commit('register/addCityDistrict', {
          city: this.city,
          district: this.selected,
        })
        this.selected = ''
      }
    },
    removeCityDistrict(selected) {
      if (selected) {
        this.$store.commit('register/removeCityDistrict', {
          city: this.city,
          district: selected,
        })

        // small trick to force re-rendering after districts removed from vuex
        this.selected = 'removed'
        this.selected = ''
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