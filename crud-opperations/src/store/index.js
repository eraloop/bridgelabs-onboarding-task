import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    // async login({ commit }, payload) {
    //   try {
    //     const token = await LoginService.loginUser(payload)
    //     commit("loginSuccess", token)
    //     console.log(token)
    //     router.push('/welcome')
    //     return true
    //   } catch (e) {
    //     console.log(e)
    //     return false
    //   }
    // },

    // async register({commit},user) {
    //   try {
    //     const token = await RegisterService.registerUser(user)
    //     commit('registrationSuccess', token)
    //     console.log(token)
    //     router.push('/welcome')
    //     return true
    //   } catch (e) {
    //     console.log("console from register store", e)
    //     return false
    //   }
    // },
    
    // async logout() {
    //   console.log(this.refreshToken)
    //   // await LogoutService.logoutUser(refreshToken)
    // },
  },
})
