import { createStore } from 'vuex'
import clientTime from './clientTime'

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    clientTime
  },
})

store.dispatch('clientTime/updateTime');

export default store;