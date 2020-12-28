/*
 * Actions
 * * * * */

const prefix = '@user'

export const FETCH_USERS = `${prefix}/FETCH_USERS`
export const FETCH_USERS_SUCCESS = `${prefix}/FETCH_USERS_SUCCESS`
export const FETCH_USERS_FAIL = `${prefix}/FETCH_USERS_FAIL`

/*
 * Action creators
 * * * * * * * * */

export function fetchUsers() {
  return {
    types: [FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL],
    request: ({ client }) => client.get('user'),
  }
}
