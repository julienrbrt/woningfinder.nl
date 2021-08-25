<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Welk plan neem je?</p>
    <p class="mt-2 text-base text-gray-500">
      Je reageert automatisch met WoningFinder voor 14 dagen gratis, daarna kun
      je met een eenmalig bedrag blijven reageren tot je een huis vindt 👍
    </p>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      alert="Selecteer een plan."
    />

    <fieldset>
      <legend class="sr-only">Plan</legend>
      <div class="mt-6 space-y-4">
        <label
          v-for="plan in plan"
          :key="plan.name"
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
            hover:border-wf-orange
            sm:flex
            sm:justify-between
            focus-within:ring-1
            focus-within:ring-offset-2
            focus-within:ring-wf-orange
          "
          v-bind:class="[
            selectedPlan.name === plan.name
              ? 'border-wf-orange '
              : 'border-gray-300',
          ]"
        >
          <input
            type="radio"
            name="plan"
            v-model="selectedPlan"
            :value="plan.name"
            class="sr-only"
          />
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                {{ planTitle(plan.name) }}
              </p>
              <div class="text-xs text-gray-500">14 dagen gratis</div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">€{{ plan.price }}</div>
            <div class="text-xs ml-1 text-gray-500 sm:ml-0">eenmalig</div>
          </div>
        </label>
      </div>
    </fieldset>

    <AlertInfo
      class="mt-4"
      description="Basis reageert alleen op sociale huurwonigen. Als je een vrije sector
      woning zoekt neem dan ons Pro plan."
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
  props: ['plan'],
  data() {
    return {
      error: false,
    }
  },
  methods: {
    validate() {
      if (this.$store.getters['register/getPlan'].name == '') {
        this.error = true
        return false
      }

      return true
    },
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    hideAlert() {
      this.error = false
    },
  },
  computed: {
    selectedPlan: {
      get() {
        return this.$store.getters['register/getPlan']
      },
      set(plan) {
        this.$store.commit('register/setPlan', plan)
      },
    },
  },
}
</script>