import Vue from 'vue'
import Vuex from 'vuex'
import  RegisterService  from '../services/register'
import  LoginService  from '../services/login'
// import  LogoutService  from '../services/logout'
import TokenService from '../services/storage'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view_name: "",
    registrationSuccess:{

    }
  },
  mutations: {
    update_name (state, payload){
      state.view_name = payload
    },

    loginSuccess(state, payload){
      state.token = payload.token
      state.accessToken = payload.access
      state.refreshToken = payload.refresh
      state.userData.fname = payload.first_name
      state.userData.lname = payload.last_name
      state.userData.email = payload.email
      state.userData.isAdmin = payload.isAdmin
      state.userData.name = payload.name
    },

    registrationSuccess(state, payload){
      state.token = payload.token
      state.accessToken = payload.access
      state.refreshToken = payload.refresh
      state.userData.fname = payload.first_name
      state.userData.lname = payload.last_name
      state.userData.email = payload.email
      state.userData.isAdmin = payload.isAdmin
      state.userData.name = payload.name
    }
  },

  getters:{
    get_view_name: (state)=> {
      return state.view_name
    },
    get_user_data(state){
      return state.userData
    },
    get_token(state){
      return state.token
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
        const token = await RegisterService.registerUser(user)
        // commit('registrationSuccess', (token, user.username))
        console.log(token)
        return true
      } catch (e) {
        console.log("console from register store", e)
        return false
      }
    },

    logout() {
      LogoutService.logout()
    },
  },
})
