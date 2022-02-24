<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">Laten we het persoonlijker maken</p>

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
            min="1920"
            :max="currentYear"
            step="1"
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
          shadow-sm
          focus:ring-wf-orange focus:border-wf-orange
          block
          w-full
          sm:text-sm
          border-gray-300
          rounded-md
        "
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
      </div>

      <div v-if="showHasChildren">
        <p class="text-sm text-gray-500">
          Omdat je jonger bent dan 23, moet de maximaal huurprijs lager zijn om
          huurtoeslag te krijgen. Als jij een kind hebt, geld dit niet voor jou.
        </p>

        <div class="mt-4 inline-flex">
          <input
            v-model="customer.has_children_same_housing"
            id="children"
            name="children"
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
            for="children"
            class="block text-sm font-medium text-gray-900 ml-3"
            >Ik heb een meeverhuizende kindje</label
          >
        </div>
      </div>

      <AlertInfo
        class="mt-4"
        alert='WoningFinder reageert alleen op
              <a
                class="underline text-gray-700 hover:text-gray-900"
                target="_blank"
                href="https://www.woningmarktbeleid.nl/onderwerpen/daeb/toewijzen-door-woningcorporaties/regels-voor-toewijzen"
                >passende woningen</a
              >. We hebben dus extra gegevens nodig zoals het aantal
              medebewoners of je (gezamelijk) jaarlijks inkomen. Al je gegevens
              blijven altijd privé en worden nooit gedeeld.'
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  data() {
    return {
      error: false,
      errorMsg: '',
      customer: this.$store.getters['register/getCustomer'],
    }
  },
  methods: {
    // called from parent component
    validate() {
      this.customer.yearly_income = parseInt(this.customer.yearly_income)
      this.customer.family_size = parseInt(this.customer.family_size)
      this.customer.birth_year = parseInt(this.customer.birth_year)

      // check error
      if (
        isNaN(this.customer.yearly_income) ||
        isNaN(this.customer.family_size) ||
        this.customer.name == '' ||
        this.customer.email == '' ||
        this.customer.birth_year < 1920
      ) {
        this.error = true
        this.errorMsg =
          'We hebben al je gegevens nodig. Controleer het formulier nogmaals.'
        return false
      }

      this.$store.commit('register/setCustomer', this.customer)

      return true
    },
    hideAlert() {
      this.error = false
    },
  },
  computed: {
    currentYear: () => {
      return new Date().getFullYear()
    },
    showHasChildren() {
      return this.currentYear - this.customer.birth_year < 23
    },
  },
}
</script>