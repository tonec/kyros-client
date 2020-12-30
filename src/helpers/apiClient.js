/* eslint-disable no-param-reassign */
import axios from 'axios'
import config from '../../config'

export default function axiosClient() {
  const instance = axios.create({
    baseURL: __SERVER__
      ? `http://${config.apiHost}:${config.apiPort}/api`
      : `http://${config.apiHost}:${config.apiPort}/api`,
  })

  instance.defaults.withCredentials = true

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response.data : error),
  )

  return instance
}
