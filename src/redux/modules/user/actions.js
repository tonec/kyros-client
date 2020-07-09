import axios from 'axios'

export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  dispatch({
    type: FETCH_USERS,
    payload: response
  })
}
