/*
 * Actions
 * * * * */

const prefix = '@user'

export const FETCH = `${prefix}/FETCH`
export const FETCH_SUCCESS = `${prefix}/FETCH_SUCCESS`
export const FETCH_FAIL = `${prefix}/FETCH_FAIL`

/*
 * Action creators
 * * * * * * * * */

export function fetchUsers() {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    request: ({ client }) => client.get('user'),
  }
}
