import ApiService from './api'
import axios from 'axios'

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
      console.log("login response from service ", response)
      return response.data
    } catch (error) {
      return error
    }
}
}

export default LoginService