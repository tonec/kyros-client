import { saveAuthData, clearAuthData } from 'utils/sessionStorage'

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

export function login(data) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    request: async ({ client }) => {
      try {
        const response = await client.post('auth/login', data)
        saveAuthData(response)
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  }
}

export function logout() {
  clearAuthData()

  return {
    type: LOGOUT,
  }
}
