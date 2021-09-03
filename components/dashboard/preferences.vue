<template>
  <div class="mt-6 bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 mt-4 mb-2 sm:px-6">
      <h1 class="text-xl text-wf-puple">Je profiel</h1>
    </div>
    <div class="text-gray-500 mt-2 mb-4 px-4 flex flex-col sm:px-6">
      <ul class="text-base grid grid-rows-2 grid-cols-2">
        <li class="mb-2">👤 {{ customer.name }}</li>
        <li class="mb-2">✉️ {{ customer.email }}</li>
        <li class="mb-2">🗓 {{ customer.birth_year }}</li>
        <li class="mb-2">💰 €{{ customer.yearly_income }} per jaar</li>
      </ul>
    </div>
    <div class="px-4 mt-4 mb-2 sm:px-6">
      <h1 class="text-xl text-wf-puple">Je zoekopdracht in het kort</h1>
    </div>
    <div class="text-gray-500 mt-2 mb-4 px-4 flex flex-col sm:px-6">
      <ul class="text-base grid grid-rows-2 grid-cols-2">
        <li class="mb-2">🏠 {{ housingTypeTitle() }}</li>
        <li class="mb-2">📍 {{ cityTitle() }}</li>
        <li class="mb-2">
          💰 €{{ customer.housing_preferences.maximum_price }} p/m maximum
        </li>
        <li class="mb-2">
          🛏 Minimaal
          {{ customer.housing_preferences.number_bedroom }} slaapkamer(s)
        </li>
        <li v-if="hasExtras()" class="mb-2">
          🪴 Extras zoals {{ translateTitle() }}
        </li>
      </ul>
      <div
        class="
          self-center
          mt-2
          btn
          w-min
          bg-wf-purple
          hover:bg-wf-purple-dark
          hover:ring-wf-purple
          focus:ring-wf-purple
          py-2
        "
      >
        Bijwerken
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['customer'],
  methods: {
    housingTypeTitle() {
      var result = []
      for (var i = 0; i < this.customer.housing_preferences.type.length; i++) {
        switch (this.customer.housing_preferences.type[i]) {
          case 'house':
            result.push('Huis')
            break
          case 'appartement':
            result.push('Appartement')
        }
      }

      return result.join(' of ')
    },
    cityTitle() {
      var result = []
      for (var i = 0; i < this.customer.housing_preferences.city.length; i++) {
        result.push(this.customer.housing_preferences.city[i].name)
      }

      return result.join(', ')
    },
    hasExtras() {
      return (
        this.customer.housing_preferences.has_attic ||
        this.customer.housing_preferences.is_accessible ||
        this.customer.housing_preferences.has_balcony ||
        this.customer.housing_preferences.has_garden ||
        this.customer.housing_preferences.has_elevator
      )
    },
    translateTitle() {
      var result = []
      if (this.customer.housing_preferences.has_attic) {
        result.push('zolder')
      }

      if (this.customer.housing_preferences.is_accessible) {
        result.push('woning toegankelijkheid')
      }

      if (this.customer.housing_preferences.has_balcony) {
        result.push('balkon')
      }

      if (this.customer.housing_preferences.has_garden) {
        result.push('tuin')
      }

      if (this.customer.housing_preferences.has_garage) {
        result.push('garage')
      }

      if (this.customer.housing_preferences.has_elevator) {
        result.push('lift')
      }

      return result.join(', ')
    },
  },
}
</script>