<template>
  <div class="mt-6 card bg-white shadow">
    <div class="card-body">
      <h1 class="card-title text-xl text-wf-puple">Je profiel</h1>
      <ul class="text-gray-500 text-base grid grid-rows-2 grid-cols-2">
        <li class="mb-2">👤 {{ customer.name }}</li>
        <li class="mb-2 break-all">✉️ {{ customer.email }}</li>
        <li class="mb-2">🗓 {{ customer.birth_year }}</li>
        <li class="mb-2">💰 €{{ customer.yearly_income }} per jaar</li>
        <li class="mb-2">👪 {{ customer.family_size }} inwoner(s)</li>
      </ul>
      <h1 class="card-title text-xl text-wf-puple">
        Je zoekopdracht in het kort
      </h1>
      <ul class="text-gray-500 text-base grid grid-rows-2 grid-cols-2">
        <li class="mb-2">🏠 {{ housingTypeTitle() }}</li>
        <li class="mb-2">📍 {{ cityTitle() }}</li>
        <li v-if="housing_preferences.maximum_price > 0" class="mb-2">
          💰 €{{ housing_preferences.maximum_price }} p/m maximum
        </li>
        <li class="mb-2">
          🛏 Minimaal
          {{ housing_preferences.number_bedroom }} slaapkamer(s)
        </li>
        <li v-if="hasExtras()" class="mb-2">
          🪴 Extras zoals {{ translateTitle() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['customer', 'housing_preferences'],
  methods: {
    housingTypeTitle() {
      var result = []
      for (var i = 0; i < this.housing_preferences.type.length; i++) {
        switch (this.housing_preferences.type[i]) {
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
      for (var i = 0; i < this.housing_preferences.city.length; i++) {
        result.push(this.housing_preferences.city[i].name)
      }

      return result.join(', ')
    },
    hasExtras() {
      return (
        this.housing_preferences.is_accessible ||
        this.housing_preferences.has_balcony ||
        this.housing_preferences.has_garden ||
        this.housing_preferences.has_elevator
      )
    },
    translateTitle() {
      var result = []
      if (this.housing_preferences.is_accessible) {
        result.push('woning toegankelijkheid')
      }

      if (this.housing_preferences.has_balcony) {
        result.push('balkon')
      }

      if (this.housing_preferences.has_garden) {
        result.push('tuin')
      }

      if (this.housing_preferences.has_garage) {
        result.push('garage')
      }

      if (this.housing_preferences.has_elevator) {
        result.push('lift')
      }

      return result.join(', ')
    },
  },
}
</script>