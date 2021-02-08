import Cookies from 'cookies-js'
import get from 'lodash/get'
import { AnyAction } from 'redux'
import { APIAction } from 'types'
import { TOKEN_KEY } from 'utils/constants'

/*
 * Actions
 * * * * */

const prefix = '@auth'

export const LOGIN = `${prefix}/LOGIN`
export const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`
export const LOGIN_FAIL = `${prefix}/LOGIN_FAIL`

export const LOGOUT = `${prefix}/LOGOUT`

/*
 * Action creators
 * * * * * * * * */

interface Credentials {
  email: string
  password: string
}

export function login(data: Credentials): APIAction {
  return {
    type: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    request: async ({ client }) => {
      try {
        const response = await client.post('auth/login', data)
        const accessToken = get(response, 'auth.accessToken')

        if (accessToken) {
          Cookies.set(TOKEN_KEY, accessToken)
        }

        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  }
}

export function logout(): AnyAction {
  Cookies.expire(TOKEN_KEY)

  return {
    type: LOGOUT,
  }
}
