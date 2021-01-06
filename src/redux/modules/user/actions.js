/*
 * Actions
 * * * * */

const prefix = '@user'

export const FETCH = `${prefix}/FETCH`
export const FETCH_SUCCESS = `${prefix}/FETCH_SUCCESS`
export const FETCH_FAIL = `${prefix}/FETCH_FAIL`

export const CREATE = `${prefix}/CREATE`
export const CREATE_SUCCESS = `${prefix}/CREATE_SUCCESS`
export const CREATE_FAIL = `${prefix}/CREATE_FAIL`

export const UPDATE = `${prefix}/UPDATE`
export const UPDATE_SUCCESS = `${prefix}/UPDATE_SUCCESS`
export const UPDATE_FAIL = `${prefix}/UPDATE_FAIL`

export const DELETE = `${prefix}/DELETE`
export const DELETE_SUCCESS = `${prefix}/DELETE_SUCCESS`
export const DELETE_FAIL = `${prefix}/DELETE_FAIL`

/*
 * Action creators
 * * * * * * * * */

export function fetchUsers() {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    request: ({ client }) => client.get('user'),
  }
}

export function createUser(data) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    request: ({ client }) => client.post('user', data),
    flash: { success: 'User created!' },
    closeModal: true,
  }
}

export function updateUser(id, data) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    request: ({ client }) => client.patch(`user/${id}`, data),
    flash: { success: 'User updated!' },
    closeModal: true,
  }
}

export function deleteUser(id) {
  return {
    types: [DELETE, DELETE_SUCCESS, DELETE_FAIL],
    request: ({ client }) => client.delete(`user/${id}`),
    flash: { success: 'User deleted!' },
  }
}
