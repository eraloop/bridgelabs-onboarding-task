import ApiService from './api'

const LoginService = {
  loginUser: async function (data) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/user/login',
      data: data
    }

    try {
      // ApiService.setHeader()
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
      return error
    }
}
}

export default LoginService