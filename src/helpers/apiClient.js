/* eslint-disable no-param-reassign */
import axios from 'axios'
import config from '../../config'

export default function axiosClient(req) {
  const instance = axios.create({
    baseURL: `http://${config.apiHost}:${config.apiPort}/api`,
  })

  instance.defaults.withCredentials = true

  instance.interceptors.request.use(
    conf => {
      if (__SERVER__) {
        if (req.header('cookie')) {
          conf.headers.Cookie = req.header('cookie')
        }
      }
      return conf
    },
    error => Promise.reject(error),
  )

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response.data : error),
  )

  return instance
}
