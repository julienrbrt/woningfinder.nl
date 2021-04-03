export const state = () => ({
  register: {
    name: '',
    email: '',
    birth_year: 0,
    yearly_income: 0,
    family_size: 0,
    has_children_same_housing: false,
    plan: { name: '' },
    housing_preferences: {
      type: [],
      maximum_price: 0,
      city: [], // { name: '', district: [{name: ''}] }
      number_bedroom: 0,
      has_balcony: false,
      has_garage: false,
      has_garden: false,
      has_elevator: false,
      has_attic: false,
      has_housing_allowance: false,
      is_accessible: false,
    },
  },
})

export const getters = {
  getCities: (state) => {
    return state.register.housing_preferences.city
  },
}

export const mutations = {
  setPlan(state, plan) {
    state.register.plan.name = plan
  },
  addCity(state, city) {
    state.register.housing_preferences.city.push({
      name: city,
      district: [],
    })
  },
  removeCity(state, city) {
    state.register.housing_preferences.city = state.register.housing_preferences.city.filter(
      (c) => c.name !== city.name
    )
  },
  setName(state, name) {
    state.register.name = name
  },
  setEmail(state, email) {
    state.register.email = email
  },
}
