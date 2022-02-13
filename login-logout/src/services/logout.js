import ApiService from './api'
import TokenService from './storage'
// import axios from 'axios'

const LogoutService = {
  logoutUser: async function (data) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/user/logout',
      data: data
    }

    try {
      // ApiService.setHeader()
      const response = await ApiService.customRequest(requestData)
      TokenService.removeToken()
      console.log(response)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default LogoutService