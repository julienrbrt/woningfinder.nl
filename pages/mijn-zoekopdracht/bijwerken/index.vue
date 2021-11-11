<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1
        class="
          text-3xl
          font-extrabold
          text-wf-purple
          tracking-tight
          sm:text-4xl
        "
      >
        {{ title }}
      </h1>

      <fieldset>
        <legend class="sr-only">Gegevens</legend>
        <div class="mt-6 space-y-4">
          <label
            v-for="action in action"
            :key="action"
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
              sm:flex sm:justify-between
              focus-within:ring-1 focus-within:ring-wf-orange
            "
            v-bind:class="[
              selectedAction === action
                ? 'border-wf-orange '
                : 'border-gray-300',
            ]"
          >
            <input
              type="radio"
              name="action"
              v-model="selectedAction"
              :value="action"
              class="sr-only"
            />
            <div class="flex items-center">
              <div class="text-sm">
                <p class="font-medium text-gray-900">
                  {{ actionTitle(action) }} bijwerken
                </p>
              </div>
            </div>
          </label>
        </div>
      </fieldset>

      <div class="items-center inline-flex mt-5 space-x-4">
        <BackButton overwrite="/mijn-zoekopdracht" />
        <NuxtLink
          :to="'/mijn-zoekopdracht/bijwerken/' + selectedAction"
          class="
            cursor-pointer
            btn
            w-min
            bg-wf-purple
            hover:bg-wf-purple-dark hover:ring-wf-purple
            focus:ring-wf-purple
            py-2
          "
          >Bijwerken
        </NuxtLink>
      </div>
    </div>
  </Hero>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      title: 'Mijn gegevens bijwerken',
      selectedAction: '',
      action: ['profiel', 'zoekopdracht'],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    actionTitle: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    push: () => {
      if (this.selectedAction) {
        this.$router.push('/mijn-zoekopdracht/bijwerken/' + this.selectedAction)
      }
    },
  },
}
</script>