<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Je WoningFinder zoekopdracht
          </h1>
          <p class="mt-6 text-lg text-gray-500">Welke plan wil je?</p>
          <p class="mt-6 text-base text-gray-500">
            Het enige verschil tussen ons Basis en Pro plan is ons sneller
            garantie. Als je dat niet nodig hebt, kies maar het basis plan, die
            is toch goedkoper.
          </p>
        </div>

        <!-- Plan section -->
        <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="mt-10 space-y-4">
            <label
              class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
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
                  <p id="server-size-0-label" class="font-medium text-gray-900">
                    Basis
                  </p>
                </div>
              </div>
              <div
                id="server-size-0-description-1"
                class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
              >
                <div class="font-medium text-gray-900">€35</div>
                <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
              </div>
              <!-- Checked: "border-wf-orange", Not Checked: "border-transparent" -->
              <div
                class="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>

            <label
              class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
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
                  <p id="server-size-1-label" class="font-medium text-gray-900">
                    Pro
                  </p>
                  <div id="server-size-1-description-0" class="text-gray-500">
                    <p class="sm:inline">Basis</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true"
                      >&middot;</span
                    >
                    <p class="sm:inline">Meerdere zoekopdracht</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true"
                      >&middot;</span
                    >
                    <p class="sm:inline">Sneller garantie</p>
                  </div>
                </div>
              </div>
              <div
                id="server-size-1-description-1"
                class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
              >
                <div class="font-medium text-gray-900">€75</div>
                <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
              </div>
              <!-- Checked: "border-wf-orange", Not Checked: "border-transparent" -->
              <div
                class="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
          </div>
        </fieldset>

        <!-- buttons --->
        <RegisterStepper />
      </Hero>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    plan: {
      get() {
        return this.$store.state.plan
      },
      set(value) {
        this.$store.commit('setPlan', { plan: value })
      },
    },
  },
}
</script>