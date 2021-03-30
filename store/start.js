export const state = () => ({
  plan: '',
  name: '',
  email: '',
  cities: [],
})

export const mutations = {
  setPlan(state, payload) {
    state.plan = payload.plan
  },
  setName(state, payload) {
    state.name = payload.name
  },
  setEmail(state, payload) {
    state.email = payload.email
  },
}
