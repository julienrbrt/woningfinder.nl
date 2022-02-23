<template>
  <Hero>
    <AlertOk
      class="my-4"
      v-if="submitted"
      @click="hideAlert"
      alert="Login link succesvol verstuurd!"
    />

    <AlertError
      class="my-4"
      v-if="error"
      @click="hideAlert"
      alert="Er is iets misgegaan. Controleer je e-mailadres of probeer nogmaals."
    />

    <h1
      class="
        mt-6
        text-3xl
        font-extrabold
        text-wf-purple
        tracking-tight
        sm:text-4xl
      "
    >
      {{ title }}
    </h1>
    <p class="mt-6 text-lg text-gray-500">
      Inloggen met alleen jouw e-mailadres. Je krijgt een e-mail van ons met een
      linkje.
    </p>

    <input
      v-model="email"
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      placeholder="E-mailadres"
      class="
        my-4
        py-4
        shadow-sm
        focus:ring-wf-orange focus:border-wf-orange
        w-full
        text-base
        border-gray-300
        rounded-md
      "
    />

    <button
      @click="send"
      type="submit"
      class="btn btn-primary btn-block group relative md:w-min pl-12"
    >
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <LockClosedIcon
          class="
            h-5
            w-5
            text-wf-orange-light
            group-hover:text-wf-orange-lightest
          "
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
      title: 'Inloggen',
      email: '',
      alert: true,
      error: false,
      submitted: false,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    async send() {
      if (!this.validForm) {
        this.error = true
        return
      }

      await this.$axios
        .$post('login', {
          email: this.email,
        })
        .then(() => {
          this.email = ''
          this.submitted = true
        })
        .catch(() => {
          this.error = true
        })
    },
    hideAlert() {
      this.alert = false
      this.error = false
      this.submitted = false
    },
  },
  computed: {
    validForm() {
      return this.email.length > 0
    },
  },
}
</script>
