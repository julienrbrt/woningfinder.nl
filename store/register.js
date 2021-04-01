export const state = () => ({
  register: {
    name: '',
    email: '',
    birth_year: 0,
    yearly_income: 0,
    family_size: 0,
    has_children_same_housing: false,
    plan: { name: '' },
    housing_preferences: [
      {
        type: [],
        maximum_price: 0,
        city: [{ name: '', district: [] }],
        number_bedroom: 0,
        has_balcony: false,
        has_garage: false,
        has_garden: false,
        has_elevator: false,
        has_attic: false,
        has_housing_allowance: false,
        is_accessible: false,
      },
    ],
  },
})

export const getters = {
  getCities: (state) => {
    return state.register.housing_preferences[0].city
  },
}

export const mutations = {
  setPlan(state, plan) {
    state.register.plan.name = plan
  },
  setCities(state, selectedCities) {
    var cities = []
    selectedCities.forEach((city) => cities.push({ name: city, district: [] }))
    state.register.housing_preferences[0].city = cities
  },
  setName(state, name) {
    state.register.name = name
  },
  setEmail(state, email) {
    state.register.email = email
  },
}
