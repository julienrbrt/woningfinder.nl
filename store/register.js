export const state = () => ({
  register: {
    name: '',
    email: '',
    birth_year: 0,
    yearly_income: 0,
    family_size: 1,
    has_children_same_housing: false,
    plan: { name: '' },
    housing_preferences: {
      city: [], // { name: '', district: [{name: ''}] }
      type: [],
      maximum_price: 0,
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
  getPlan: (state) => {
    return state.register.plan
  },
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
  getHousingPreferences: (state) => {
    return {
      maximum_price: state.register.housing_preferences.maximum_price,
      number_bedroom: state.register.housing_preferences.number_bedroom,
      has_balcony: state.register.housing_preferences.has_balcony,
      has_garage: state.register.housing_preferences.has_garage,
      has_garden: state.register.housing_preferences.has_garden,
      has_elevator: state.register.housing_preferences.has_elevator,
      has_attic: state.register.housing_preferences.has_attic,
      has_housing_allowance:
        state.register.housing_preferences.has_housing_allowance,
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
    }
  },
  getRegister: (state) => {
    return state.register
  },
}

export const mutations = {
  setPlan(state, plan) {
    this._vm.$set(state.register.plan, 'name', plan)
  },
  addCity(state, city) {
    this._vm.$set(
      state.register.housing_preferences.city,
      state.register.housing_preferences.city.length,
      { name: city, district: [] }
    )
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
  setHousingType(state, type) {
    state.register.housing_preferences.type = type
  },
  setHousingPreferences(state, preferences) {
    state.register.housing_preferences.maximum_price = preferences.maximum_price
    state.register.housing_preferences.number_bedroom =
      preferences.number_bedroom
    state.register.housing_preferences.has_balcony = preferences.has_balcony
    state.register.housing_preferences.has_garage = preferences.has_garage
    state.register.housing_preferences.has_garden = preferences.has_garage
    state.register.housing_preferences.has_elevator = preferences.has_elevator
    state.register.housing_preferences.has_attic = preferences.has_attic
    state.register.housing_preferences.has_housing_allowance =
      preferences.has_housing_allowance
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
  },
}