<template>
  <div>
    <div class="sm:max-w-xl">
      <p class="mt-6 text-lg text-gray-500">Welke plan wil je?</p>
      <p class="mt-6 text-base text-gray-500">
        Het enige verschil tussen ons Basis en Pro plan is ons sneller garantie.
        Als je dat niet nodig hebt, kies maar het basis plan, die is toch
        goedkoper.
      </p>
    </div>

    <fieldset>
      <legend class="sr-only">Plan</legend>
      <div class="mt-10 space-y-4">
        <label
          class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-wf-orange sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
        >
          <input
            type="radio"
            name="plan"
            v-model="plan"
            value="basis"
            class="sr-only"
          />
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">Basis</p>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">€35</div>
            <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
          </div>
        </label>

        <label
          class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-wf-orange sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
        >
          <input
            type="radio"
            name="plan"
            v-model="plan"
            value="pro"
            class="sr-only"
          />
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">Pro</p>
              <div class="text-gray-500">
                <p class="sm:inline">Basis</p>
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true"
                  >&middot;</span
                >
                <p class="sm:inline">Sneller garantie</p>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">€75</div>
            <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  computed: {
    plan: {
      get() {
        return this.$store.state.register.plan
      },
      set(plan) {
        this.$store.commit('register/setPlan', plan)
      },
    },
  },
}
</script>