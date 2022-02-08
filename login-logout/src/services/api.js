import axios from 'axios'
// import TokenService from './storage'

const ApiService = {
  setHeader () {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'
  },
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService