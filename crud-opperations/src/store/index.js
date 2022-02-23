import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {

    products: {}
  },
  mutations: {
    setProducts: (state, payload)=> {
      state.products = payload
    }
  },

  getters: {
    getProducts: (state)=>{
      return state.products
    }
  },
  actions: {

    async fetchProducts({commit}) {
      try {
        const response  = await FetchService.getProduct()
        commit('setProducts', response)
        return true
      } catch (e) {
        return e
      }
    },
    
  },
  modules: {
  }
})
