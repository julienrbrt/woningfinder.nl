<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Welke plan wil je?</p>
    <p class="mt-2 text-base text-gray-500">
      Het enige verschil tussen ons Basis en Pro plan is ons sneller garantie.
    </p>

    <fieldset>
      <legend class="sr-only">Plan</legend>
      <div class="mt-6 space-y-4">
        <label
          v-for="plan in plan"
          :key="plan.name"
          class="relative block rounded-lg border bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-wf-orange sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
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
              <div v-if="planTitle(plan.name) == 'Pro'" class="text-gray-500">
                <p class="sm:inline">Basis</p>
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true"
                  >&middot;</span
                >
                <p class="sm:inline">Sneller garantie</p>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">€{{ plan.price }}</div>
            <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: ['plan'],
  methods: {
    planTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
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