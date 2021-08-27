<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Welke woningtype zoek je?</p>
    <p class="mt-2 text-base text-gray-500">
      We weten nu genoeg over jouw gewenste locatie. We hebben nu een paar
      vragen om meer te weten over de woning die jij zoekt.
    </p>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      alert="Selecteer een woningtype."
    />

    <fieldset>
      <legend class="sr-only">Woningtype</legend>
      <div class="mt-6 space-y-4">
        <label
          v-for="housing in supported_housing"
          :key="housing"
          class="
            relative
            block
            rounded-lg
            border
            bg-white
            shadow-sm
            px-6
            py-4
            cursor-pointer
            md:hover:border-wf-orange
            sm:flex
            sm:justify-between
            focus-within:ring-1 focus-within:ring-wf-orange
          "
          v-bind:class="[
            selectedType.indexOf(housing) > -1
              ? 'border-wf-orange '
              : 'border-gray-300',
          ]"
        >
          <input
            type="checkbox"
            name="type"
            v-model="selectedType"
            :value="housing"
            class="sr-only"
          />
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                {{ housingTitle(housing) }}
              </p>
            </div>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: ['supported_housing'],
  data() {
    return {
      error: false,
    }
  },
  methods: {
    validate() {
      if (this.$store.getters['register/getHousingType'].length == 0) {
        this.error = true
        return false
      }

      return true
    },
    hideAlert() {
      this.error = false
    },
    housingTitle: (name) => {
      if (name == 'house') {
        // translate house to huis
        name = 'huis'
      }
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
  },
  computed: {
    selectedType: {
      get() {
        return this.$store.getters['register/getHousingType']
      },
      set(type) {
        this.$store.commit('register/setHousingType', type)
      },
    },
  },
}
</script>