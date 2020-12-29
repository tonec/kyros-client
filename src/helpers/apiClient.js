/* eslint-disable no-param-reassign */
import axios from 'axios'
import config from '../../config'

export default function axiosClient(req) {
  const instance = axios.create({
    baseURL: __SERVER__
      ? `http://${config.apiHost}:${config.apiPort}/api`
      : `http://${config.apiHost}:${config.apiPort}/api`,
  })

  let token

  instance.setJwtToken = newToken => {
    token = newToken
  }

  instance.interceptors.request.use(
    conf => {
      if (__SERVER__) {
        if (req.header('cookie')) {
          conf.headers.Cookie = req.header('cookie')
        }

        console.log('req.header', req)

        // if (req.header('authorization')) {
        //   conf.headers.authorization = req.header('authorization')
        // }

        if (token) {
          instance.defaults.headers.common.Authorization = token
        } else {
          // deleting the token from header
          delete instance.defaults.headers.common.Authorization
        }
      }

      if (token) {
        conf.headers.authorization = 'token'
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
