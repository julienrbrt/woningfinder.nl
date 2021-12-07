export const state = () => ({
  register: {
    name: '',
    email: '',
    birth_year: 0,
    yearly_income: 0,
    family_size: 1,
    has_children_same_housing: false,
    has_alerts_enabled: false,
    housing_preferences: {
      city: [], // { name: '', district: [''] }
      type: [],
      maximum_price: 0,
      number_bedroom: 0,
      has_balcony: false,
      has_garage: false,
      has_garden: false,
      has_elevator: false,
      is_accessible: false,
    },
  },
})

export const getters = {
  getCities: (state) => {
    return state.register.housing_preferences.city
  },
  getCity: (state) => (city) => {
    return state.register.housing_preferences.city.find(
      (c) => c.name == city.name
    )
  },
  getHousingType: (state) => {
    return state.register.housing_preferences.type
  },
  getHousingPreferencesDetails: (state) => {
    return {
      maximum_price: state.register.housing_preferences.maximum_price,
      number_bedroom: state.register.housing_preferences.number_bedroom,
      has_balcony: state.register.housing_preferences.has_balcony,
      has_garage: state.register.housing_preferences.has_garage,
      has_garden: state.register.housing_preferences.has_garden,
      has_elevator: state.register.housing_preferences.has_elevator,
      is_accessible: state.register.housing_preferences.is_accessible,
    }
  },
  getCustomer: (state) => {
    return {
      name: state.register.name,
      email: state.register.email,
      birth_year: state.register.birth_year,
      yearly_income: state.register.yearly_income,
      family_size: state.register.family_size,
      has_children_same_housing: state.register.has_children_same_housing,
      has_alerts_enabled: state.register.has_alerts_enabled,
    }
  },
  getRegister: (state) => {
    return state.register
  },
}

export const mutations = {
  addCity(state, city) {
    // do not add duplicate city
    if (state.register.housing_preferences.city.find((c) => c.name == city)) {
      return
    }

    this._vm.$set(
      state.register.housing_preferences.city,
      state.register.housing_preferences.city.length,
      { name: city, district: [] }
    )
  },
  removeCity(state, city) {
    state.register.housing_preferences.city =
      state.register.housing_preferences.city.filter(
        (c) => c.name !== city.name
      )
  },
  addCitiesRaw(state, cities) {
    state.register.housing_preferences.city = cities
  },
  addCityDistrict(state, input) {
    // find city index
    var cityIdx = state.register.housing_preferences.city.findIndex(
      (c) => c.name == input.city.name
    )

    // do not add duplicate city district
    if (
      state.register.housing_preferences.city[cityIdx].district.find(
        (d) => d == input.district
      )
    ) {
      return
    }

    // add district
    state.register.housing_preferences.city[cityIdx].district.push(
      input.district
    )
  },
  removeCityDistrict(state, input) {
    // find city index
    var cityIdx = state.register.housing_preferences.city.findIndex(
      (c) => c.name == input.city.name
    )

    // remove district
    state.register.housing_preferences.city[cityIdx].district =
      state.register.housing_preferences.city[cityIdx].district.filter(
        (d) => d !== input.district
      )
  },
  setHousingType(state, type) {
    state.register.housing_preferences.type = type
  },
  setHousingPreferencesDetails(state, preferences) {
    state.register.housing_preferences.maximum_price = preferences.maximum_price
    state.register.housing_preferences.number_bedroom =
      preferences.number_bedroom
    state.register.housing_preferences.has_balcony = preferences.has_balcony
    state.register.housing_preferences.has_garage = preferences.has_garage
    state.register.housing_preferences.has_garden = preferences.has_garden
    state.register.housing_preferences.has_elevator = preferences.has_elevator
    state.register.housing_preferences.is_accessible = preferences.is_accessible
  },
  setCustomer(state, customer) {
    state.register.name = customer.name
    state.register.email = customer.email
    state.register.birth_year = customer.birth_year
    state.register.yearly_income = customer.yearly_income
    state.register.family_size = customer.family_size
    state.register.has_children_same_housing =
      customer.has_children_same_housing
    state.register.has_alerts_enabled = customer.has_alerts_enabled
  },
}
