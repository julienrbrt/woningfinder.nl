<template>
  <Hero>
    <AlertOk
      v-if="submitted"
      @click="hideAlert"
      alert="Je staat nu op ons wachtlijst 🎉. We houden jou op de hoogte!"
    />

    <AlertError v-if="error" @click="hideAlert" :alert="errorMsg" />

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
      We zijn hard bezig met alle Nederlandse steden toe te voegen aan
      WoningFinder. Schrijf je in op onze wachtlijst en we laten je weten
      wanneer we jouw stad hebben toegevoegd.
    </p>

    <form class="mt-6 grid grid-cols-1 gap-y-4">
      <div>
        <label for="email" class="sr-only">E-mailadres</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="
            block
            w-full
            shadow-sm
            py-3
            px-4
            placeholder-gray-500
            focus:ring-wf-orange focus:border-wf-orange
            border-gray-300
            rounded-md
          "
          placeholder="E-mailadres"
          required
        />
      </div>
      <autocomplete
        :search="search"
        ref="autocomplete"
        type="text"
        placeholder="Gewenste steden"
        aria-label="Gewenste steden"
        :debounce-time="500"
        @submit="selectCity"
        auto-select
      ></autocomplete>
    </form>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <button
        v-bind:disabled="error"
        class="btn btn-primary disabled:bg-ghost"
        type="submit"
        @click="send"
      >
        Aanmelden
      </button>
    </div>
  </Hero>
</template>

<script>
import { PlusIcon } from '@vue-hero-icons/outline'

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingService = mbxGeocoding({ accessToken: process.env.mapboxKey })

export default {
  components: {
    PlusIcon,
  },
  data() {
    return {
      title: 'Steden wachtlijst',
      email: '',
      city: '',
      errorMsg:
        'Er is iets misgegaan. Controleer het formulier en probeer het nogmaals.',
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
    async search(input) {
      var result = []

      if (input.length < 2) {
        return result
      }

      // mapbox query
      const response = await geocodingService
        .forwardGeocode({
          query: input,
          countries: ['nl'],
          types: ['place'],
          autocomplete: true,
          limit: 3,
          language: ['nl-NL'],
        })
        .send()

      const match = response.body
      for (var i = 0; i < match.features.length; i++) {
        result.push(this.cityWithoutCountry(match.features[i].place_name))
      }

      return result
    },
    cityWithoutCountry(name) {
      return name.replaceAll(', Nederland', '')
    },
    selectCity(selected) {
      if (selected) {
        this.city = selected
      }
    },
    async send() {
      if (!this.validForm) {
        this.errorMsg =
          'We hebben al je gegevens nodig. Controleer het formulier nogmaals.'

        this.error = true
        return
      }

      await this.$axios
        .$post('waitinglist', {
          email: this.email,
          city: this.city,
          // antispam
          phone: this.antiSpam,
        })
        .then(() => {
          this.email = ''
          this.city = ''
          this.$refs.autocomplete.setValue('')
          document.activeElement.blur() // remove focus
          this.submitted = true
        })
        .catch(() => {
          this.errorMsg =
            'Er is iets misgegaan. Controleer het formulier en probeer het nogmaals.'
          this.error = true
        })
    },
    hideAlert() {
      this.error = false
      this.submitted = false
    },
  },
  computed: {
    antiSpam() {
      function getStringBytes(s) {
        var i,
          a = new Array(s.length)
        for (i = 0; i < s.length; i++) {
          a[i] = s.charCodeAt(i)
        }
        return a
      }

      function add(total, num) {
        return total + num
      }

      return (
        374 +
        getStringBytes(this.email).reduce(add) +
        getStringBytes(this.city).reduce(add)
      )
    },
    validForm() {
      return this.email && this.city
    },
  },
}
</script>