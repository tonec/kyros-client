import { push, replace } from 'react-router-redux'

export default (dispatch, history = false) => {
  if (typeof window === 'undefined') return

  if (history) {
    dispatch(push({
      search: ''
    }))
    return
  }

  dispatch(replace({
    search: ''
  }))
}
