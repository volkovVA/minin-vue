import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter
  },
  state: {
    hello: 'Hello from store'
  },
  getters: {
    hello(state) {
      return state.hello + '!!!'
    }
  } 
  // state: {
  //   // counter: 0
  // },
  // mutations: {
  //   // changeCounter(state, payload) {
  //   //   state.counter += payload
  //   // }
  // },
  // actions: {
  //   // asyncChangeCounter({commit}, payload) {
  //   //   setTimeout(() => {
  //   //     commit('changeCounter', payload.counterValue)
  //   //   }, payload.timeoutDelay)
  //   // }
  // },
  // getters: {
  //   // computedCounter(state) {
  //   //   return state.counter * 10
  //   // }
  // }
})