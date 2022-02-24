<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1 class="text-3xl font-extrabold text-wf-purple tracking-tight">
        {{ title }}
      </h1>
    </div>

    <AlertError
      class="mt-4"
      v-if="error"
      @click="hideAlert"
      :alert="errorMsg"
    />

    <div class="mt-6 space-y-4">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-900">
            Naam
          </label>
          <input
            v-model="customer.name"
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            class="
              mt-2
              shadow-sm
              focus:ring-wf-orange focus:border-wf-orange
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="birth_year"
            class="block text-sm font-medium text-gray-900"
          >
            Geboorte jaar
          </label>
          <input
            v-model="customer.birth_year"
            name="birth_year"
            type="number"
            class="
              mt-2
              text-gray-500
              shadow-sm
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
            disabled
          />
        </div>
      </div>

      <label for="email" class="block text-sm font-medium text-gray-900">
        E-mailadres
      </label>
      <input
        v-model="customer.email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        class="
          text-gray-500
          shadow-sm
          block
          w-full
          sm:text-sm
          border-gray-300
          rounded-md
        "
        disabled
      />

      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="income" class="block text-sm font-medium text-gray-900"
            >Jaarlijks inkomen</label
          >
          <div class="mt-2 relative rounded-md shadow-sm">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <span class="text-gray-500 sm:text-sm"> € </span>
            </div>
            <input
              v-model="customer.yearly_income"
              type="number"
              name="income"
              id="income"
              min="0"
              class="
                focus:ring-wf-orange focus:border-wf-orange
                block
                w-full
                pl-7
                pr-12
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="20000"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <span class="text-gray-500 sm:text-sm"> per jaar </span>
            </div>
          </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="family" class="block text-sm font-medium text-gray-900">
            Aantal inwoners (inclusief jij)
          </label>
          <input
            v-model="customer.family_size"
            type="number"
            name="family"
            id="family"
            min="1"
            max="12"
            placeholder="1"
            class="
              mt-2
              shadow-sm
              focus:ring-wf-orange focus:border-wf-orange
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>

        <div class="col-span-6">
          <div class="inline-flex">
            <input
              v-model="customer.has_alerts_enabled"
              id="emailalerts"
              name="emailalerts"
              type="checkbox"
              class="
                focus:ring-wf-orange
                h-4
                w-4
                text-wf-orange-dark
                border-gray-300
                rounded
              "
            />
            <label
              for="emailalerts"
              class="block text-sm font-medium text-gray-900 ml-3"
              >Stuur me een e-mail als een reactie niet succesvol was</label
            >
          </div>
        </div>
      </div>
    </div>

    <AlertInfo
      class="mt-4"
      alert="Neem contact met ons op om je e-mailadres of geboorte jaar te wijzigen"
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <a @click="validate" class="cursor-pointer btn w-min">Opslaan</a>
    </div>
  </Hero>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  middleware: 'auth',
  components: {
    InformationCircleIcon,
  },
  data() {
    return {
      title: 'Mijn profiel bijwerken',
      customer: this.$store.getters['register/getCustomer'],
      submitted: false,
      error: false,
      errorMsg:
        'Er is iets misgegaan. Controleer het formulier nogmaals. Blijf dit gebeuren? Neem dan contact met ons op.',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    async validate() {
      this.customer.yearly_income = parseInt(this.customer.yearly_income)
      this.customer.family_size = parseInt(this.customer.family_size)

      if (
        isNaN(this.customer.yearly_income) ||
        isNaN(this.customer.family_size) ||
        this.customer.name == ''
      ) {
        this.error = true
        this.errorMsg =
          'We hebben al je gegevens nodig. Controleer het formulier nogmaals.'
        return false
      }

      if (!this.submitted) {
        // start loading bar
        this.$nuxt.$loading.start()

        // send request
        await this.submit()
        this.submitted = true

        if (!this.error) {
          // end loading bar
          this.$nuxt.$loading.finish()

          // push to route
          this.$router.push('/mijn-zoekopdracht')
        }
      }
    },
    async submit() {
      await this.$axios
        .$post(
          '/me',
          {
            name: this.customer.name,
            family_size: this.customer.family_size,
            yearly_income: this.customer.yearly_income,
            has_alerts_enabled: this.customer.has_alerts_enabled,
          },
          {
            headers: {
              Authorization: this.$cookies.get('auth'),
            },
          }
        )
        .then((response) => {
          return response
        })
        .catch((error) => {
          this.error = true
          this.errorMsg =
            'Er is iets misgegaan: "' + error.response.data.message + '".'
        })
    },
    hideAlert() {
      this.submitted = false
      this.error = false
    },
  },
}
</script>