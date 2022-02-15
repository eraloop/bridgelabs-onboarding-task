import axios from 'axios'

const ApiService = {
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService