<template>
  <HeroNoImg>
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
        Je account verwijderen
      </h1>
    </div>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      alert="Er is iets misgegaan. Controleer het formulier nogmaals. Blijf dit gebeuren? Neem dan contact met ons op."
    />

    <form class="mt-6 grid grid-cols-1 gap-y-4">
      <fieldset>
        <legend class="block text-base text-gray-700">
          Heb je een huis gevonden dankzij WoningFinder?
        </legend>
        <div class="mt-4 grid grid-cols-1 gap-y-4">
          <div class="flex items-center">
            <input
              id="has-house-yes"
              v-model="hasHouse"
              v-bind:value="true"
              name="hasHouse"
              type="radio"
              class="
                h-4
                w-4
                text-wf-orange
                focus:ring-wf-orange-dark
                border-gray-300
              "
            />
            <label for="has-house-yes" class="ml-3">
              <span class="block text-sm text-gray-700">Ja</span>
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="has-house-no"
              v-model="hasHouse"
              v-bind:value="false"
              name="hasHouse"
              type="radio"
              class="
                h-4
                w-4
                text-wf-orange
                focus:ring-wf-orange-dark
                border-gray-300
              "
            />
            <label for="has-house-no" class="ml-3">
              <span class="block text-sm text-gray-700">Nee</span>
            </label>
          </div>
        </div>
      </fieldset>
      <div>
        <label for="feedback" class="sr-only">Feedback</label>
        <textarea
          v-model="feedback"
          id="feedback"
          name="feedback"
          rows="4"
          class="
            block
            w-full
            shadow-sm
            py-3
            px-4
            placeholder-gray-500
            focus:ring-wf-orange
            focus:border-wf-orange
            border-gray-300
            rounded-md
          "
          placeholder="Hebt je een klacht, opmerking of tip? Laat het ons weten. Met je hulp verbeteren wij onze diensten."
        ></textarea>
      </div>
    </form>

    <AlertInfo
      class="mt-4"
      description="Je staat op het punt je account te verwijderen 😱. Al je gegevens worden dus compleet verwijderen van ons systeem."
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <button
        v-bind:disabled="error"
        class="
          btn
          bg-red-500
          hover:bg-red-700
          hover:ring-red-500
          focus:ring-red-500
          py-2
        "
        type="submit"
        @click="submit"
      >
        Verwijderen
      </button>
    </div>
  </HeroNoImg>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  data() {
    return {
      hasHouse: false,
      feedback: '',
      error: false,
    }
  },
  components: {
    InformationCircleIcon,
  },
  methods: {
    async submit(e) {
      e.preventDefault()

      if (!this.validForm) {
        this.error = true
        return
      }

      const params = {
        jwt: this.$route.query.jwt,
      }

      await this.$axios
        .$post(
          '/me/delete',
          {
            has_house: this.hasHouse,
            feedback: this.feedback,
          },
          { params }
        )
        .then(() => {
          // account delete, redirect
          this.$router.push('/')
        })
        .catch(() => {
          this.error = true
        })
    },
    hideAlert() {
      this.error = false
    },
  },
  computed: {
    validForm() {
      return this.feedback.trim().length > 0
    },
  },
  middleware({ route, redirect }) {
    // If the customer is not authenticated return to login
    if (!route.query.jwt || route.query.jwt == '') {
      return redirect('/login')
    }
  },
}
</script>