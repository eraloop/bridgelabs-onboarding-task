import ApiService from './api'

const FetchService = {
    
  getProduct: async function (data) {
    const requestData = {
      method: 'POST',
      url: `https://simplor.herokuapp.com/api/category/categories`,
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

export default FetchService