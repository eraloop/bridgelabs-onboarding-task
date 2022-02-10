import axios from 'axios'
// import TokenService from './storage'

const ApiService = {
  setHeader () {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
  },
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService