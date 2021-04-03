function initialState() {
  return {
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
  }
}

export const state = () => initialState

export const getters = {
  getCities: (state) => {
    return state.register.housing_preferences.city
  },
  getCity: (state) => (city) => {
    return state.register.housing_preferences.city.find(
      (c) => (c.name = city.name)
    )
  },
}

export const mutations = {
  reset(state) {
    // acquire initial state
    const s = initialState()
    Object.keys(s).forEach((key) => {
      state[key] = s[key]
    })
  },
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
  addCityDistrict(state, cityDistrict) {
    // find city index
    var cityIdx = state.register.housing_preferences.city.findIndex(
      (c) => c.name == cityDistrict.city.name
    )

    // add district
    state.register.housing_preferences.city[cityIdx].district.push({
      name: cityDistrict.district,
    })
  },
  removeCityDistrict(state, cityDistrict) {
    // find city index
    var cityIdx = state.register.housing_preferences.city.findIndex(
      (c) => c.name == cityDistrict.city.name
    )

    // remove district
    state.register.housing_preferences.city[
      cityIdx
    ].district = state.register.housing_preferences.city[
      cityIdx
    ].district.filter((d) => d.name !== cityDistrict.district)
  },
  setName(state, name) {
    state.register.name = name
  },
  setEmail(state, email) {
    state.register.email = email
  },
}
