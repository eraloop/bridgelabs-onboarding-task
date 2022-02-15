import ApiService from './api'

const CreateService = {
    
  createProduct: async function (data) {
    const requestData = {
      method: 'POST',
      url: 'https://simplor.herokuapp.com/api/category/create',
      data: data
    }

    try {
      axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default CreateService