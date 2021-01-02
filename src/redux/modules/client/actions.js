/*
 * Actions
 * * * * */

const prefix = '@client'

export const FETCH = `${prefix}/FETCH`
export const FETCH_SUCCESS = `${prefix}/FETCH_SUCCESS`
export const FETCH_FAIL = `${prefix}/FETCH_FAIL`

export const CREATE = `${prefix}/CREATE`
export const CREATE_SUCCESS = `${prefix}/CREATE_SUCCESS`
export const CREATE_FAIL = `${prefix}/CREATE_FAIL`

/*
 * Action creators
 * * * * * * * * */

export function fetchClients() {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    request: ({ client }) => client.get('client'),
  }
}

export function createClient(data) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    request: ({ client }) => client.post('client', data),
    flash: { success: 'Client created!' },
  }
}
