import Vue from 'vue'
import Vuex from 'vuex'
import  RegisterService  from '../services/register'
import  LoginService  from '../services/login'
<<<<<<< HEAD
// import  LogoutService  from '../services/logout'
import TokenService from '../services/storage'
import router from '../router'
=======
import  LogoutService  from '../services/logout'
>>>>>>> parent of 59d62774... successfully implemented the login and register apis, looking to do the logout tomorrow

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
<<<<<<< HEAD
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
=======
>>>>>>> parent of 59d62774... successfully implemented the login and register apis, looking to do the logout tomorrow
    }
  },

  getters:{
    get_view_name: (state)=> {
      return state.view_name
<<<<<<< HEAD
    },
    get_user_data(state){
      return state.userData
    },
    get_token(state){
      return state.token
=======
>>>>>>> parent of 59d62774... successfully implemented the login and register apis, looking to do the logout tomorrow
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
<<<<<<< HEAD
    
    async logout() {
      console.log(this.refreshToken)
      // await LogoutService.logoutUser(refreshToken)
=======

    logout() {
      LogoutService.logout()
>>>>>>> parent of 59d62774... successfully implemented the login and register apis, looking to do the logout tomorrow
    },
  },
})
