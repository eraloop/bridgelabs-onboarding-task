import Vue from 'vue'
import Vuex from 'vuex'
import  RegisterService  from '../services/register'
import  LoginService  from '../services/login'
import  LogoutService  from '../services/logout'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view_name: "",
    registrationSuccess:{

    }
  },
  mutations: {
    // registrationSuccess(state, paylaod){
      
    // }
  },
  getters:{
    get_view_name: (state)=> {
      return state.view_name
    }
  },
  actions: {

    async login({ commit }, payload) {
      try {
        const token = await LoginService.login(payload.username, payload.password)
        commit.push("true")
        console.log(token)
        return payload
      } catch (e) {
        console.log(e)
        return false
      }
    },

    async register(user) {
      try {
        const token = await RegisterService.register(user)
        // commit('registrationSuccess', (token, user.username))
        console.log(token)
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },

    logout() {
      LogoutService.logout()
    },
  },
})
