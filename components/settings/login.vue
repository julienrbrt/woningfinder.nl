<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1
        class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
      >
        Inloggen
      </h1>
      <p class="mt-6 text-xl text-gray-500">
        Inloggen met alleen jouw e-mailadres. Je krijgt een mail van ons met een
        linkje.
      </p>
    </div>

    <input
      v-model="email"
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      placeholder="E-mailadres"
      class="my-4 py-4 shadow-sm focus:ring-wf-orange focus:border-wf-orange w-full text-base border-gray-300 rounded-md"
    />

    <button type="submit" class="btn group relative">
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <LockClosedIcon
          class="h-5 w-5 text-wf-orange-light group-hover:text-wf-orange-lightest"
        />
      </span>
      Inloggen
    </button>
  </Hero>
</template>

<script>
import { LockClosedIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    LockClosedIcon,
  },
  data() {
    return {
      email: '',
    }
  },
  method: {
    login() {},
  },
}
</script>
