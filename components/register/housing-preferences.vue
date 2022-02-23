<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      Vertel ons meer over jouw droomhuis
    </p>
    <p class="mt-2 text-base text-gray-500">
      WoningFinder reageert niet op woningen die niet aan jouw voorkeuren
      voldoen. Denk dus goed na.
    </p>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      :alert="errorMsg"
    />

    <div class="mt-6 space-y-4">
      <!-- binnen -->
      <h2 class="text-base font-medium text-gray-900">Binnen</h2>
      <label for="bedroom" class="block text-sm font-medium text-gray-900"
        >Aantal slaapkamers</label
      >
      <select
        v-model="preferences.number_bedroom"
        name="bedroom"
        class="
          mt-2
          shadow-sm
          focus:ring-wf-orange focus:border-wf-orange
          block
          w-full
          sm:text-sm
          border-gray-300
          rounded-md
        "
      >
        <option
          v-for="bedroom in [0, 1, 2, 3, 4, 5]"
          :key="bedroom"
          :value="bedroom"
        >
          {{ bedroom }}+
        </option>
      </select>

      <div class="relative flex items-start">
        <div class="flex items-center h-5">
          <input
            v-model="preferences.is_accessible"
            id="accessible"
            name="accessible"
            type="checkbox"
            class="
              focus:ring-wf-orange
              h-4
              w-4
              text-wf-orange-dark
              border-gray-300
              rounded
            "
          />
        </div>
        <label
          for="accessible"
          class="block text-sm font-medium text-gray-900 ml-3"
          >Woning toegankelijk (rolstoel of rolator)</label
        >
      </div>

      <!-- buiten -->
      <h2 class="text-base font-medium text-gray-900">Buiten</h2>

      <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="preferences.has_balcony"
              id="balcony"
              name="balcony"
              type="checkbox"
              class="
                focus:ring-wf-orange
                h-4
                w-4
                text-wf-orange-dark
                border-gray-300
                rounded
              "
            />
          </div>
          <label
            for="balcony"
            class="block text-sm font-medium text-gray-900 ml-3"
            >Balkon</label
          >
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="preferences.has_garden"
              id="garden"
              name="garden"
              type="checkbox"
              class="
                focus:ring-wf-orange
                h-4
                w-4
                text-wf-orange-dark
                border-gray-300
                rounded
              "
            />
          </div>
          <label
            for="garden"
            class="block text-sm font-medium text-gray-900 ml-3"
            >Tuin</label
          >
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="preferences.has_garage"
              id="garage"
              name="garage"
              type="checkbox"
              class="
                focus:ring-wf-orange
                h-4
                w-4
                text-wf-orange-dark
                border-gray-300
                rounded
              "
            />
          </div>
          <label
            for="garage"
            class="block text-sm font-medium text-gray-900 ml-3"
            >Garage</label
          >
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="preferences.has_elevator"
              id="elevator"
              name="elevator"
              type="checkbox"
              class="
                focus:ring-wf-orange
                h-4
                w-4
                text-wf-orange-dark
                border-gray-300
                rounded
              "
            />
          </div>
          <label
            for="elevator"
            class="block text-sm font-medium text-gray-900 ml-3"
            >Lift</label
          >
        </div>
      </div>

      <!-- geld -->
      <h2 class="text-base font-medium text-gray-900">Geld</h2>
      <div>
        <label for="price" class="block text-sm font-medium text-gray-900"
          >Maximaal huurprijs</label
        >
        <div class="relative mt-4 rounded-md shadow-sm">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              pointer-events-none
            "
          >
            <span class="text-gray-500 sm:text-sm"> € </span>
          </div>
          <input
            v-model="preferences.maximum_price"
            type="number"
            name="price"
            id="price"
            class="
              focus:ring-wf-orange focus:border-wf-orange
              block
              w-full
              pl-7
              pr-12
              sm:text-sm
              border-gray-300
              rounded-md
            "
            placeholder="1000"
          />
          <div
            class="
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
            "
          >
            <span class="text-gray-500 sm:text-sm"> per maand </span>
          </div>
        </div>
      </div>
    </div>

    <AlertInfo
      class="mt-4"
      alert='Heb jij een wens die niet in ons zoekopdracht staat? Neem dan
            <a
              to="/contact"
              class="underline text-gray-700 hover:text-gray-900"
              >contact</a>
            met ons op.'
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>
  </div>
</template>

<script>
import { InformationCircleIcon, CurrencyEuroIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
    CurrencyEuroIcon,
  },
  data() {
    return {
      error: false,
      errorMsg: '',
      preferences: this.$store.getters['register/getHousingPreferencesDetails'],
    }
  },
  methods: {
    // called from parent component
    validate() {
      if (this.preferences.maximum_price <= 0) {
        this.error = true
        this.errorMsg = 'De maximale huurprijs moet hoger dan €0,- zijn.'

        return false
      }

      this.preferences.number_bedroom = parseInt(
        this.preferences.number_bedroom
      )
      this.preferences.maximum_price = parseFloat(
        this.preferences.maximum_price
      )

      if (
        isNaN(this.preferences.number_bedroom) ||
        isNaN(this.preferences.maximum_price)
      ) {
        this.error = true
        this.errorMsg =
          'Het aantal slaapkamers en/of de maximale huurprijs moeten een getal zijn.'
        return false
      }

      this.$store.commit(
        'register/setHousingPreferencesDetails',
        this.preferences
      )

      return true
    },
    hideAlert() {
      this.error = false
    },
  },
}
</script>