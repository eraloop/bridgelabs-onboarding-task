import ApiService from './api'

const RegisterService = {
    
  registerUser: async function (data) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/user/register',
      data: data
    }

    try {
      // ApiService.setHeader()
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
      console.log("console from register service", error)
      return error
    }
  }
}

export default RegisterService