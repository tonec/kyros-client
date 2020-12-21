import axios from 'axios'
import { TOKEN_KEY } from './constants'
import config from '../../config'

export default options => {
  const token = sessionStorage.getItem(TOKEN_KEY)

  const request = {
    method: 'get',
    timeout: 3000000,
    headers: {},
    ...options,
    url: config[process.env.API_ENV].apiUrl + options.url,
  }

  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return axios.request(request)
}
