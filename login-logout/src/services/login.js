import ApiService from './api'
import axios from 'axios'
import TokenService from './storage'

const LoginService = {
  loginUser: async function (data) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/user/login',
      data: data
    }

    try {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      const response = await ApiService.customRequest(requestData)
      TokenService.saveToken(response.data.token)
      console.log("login response from service ", response)
      return response.data
    } catch (error) {
      return error
    }
}
}

export default LoginService