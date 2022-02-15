import ApiService from './api'

const UpdateService = {
    
  updateProduct: async function (data) {
    const requestData = {
      method: 'POST',
      url: `https://simplor.herokuapp.com/api/category/update/ + ${true}`,
      data: data
    }

    try {
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default UpdateService