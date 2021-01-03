import { push, replace } from 'react-router-redux'

export default (dispatch, keepHistory = false) => {
  if (typeof window === 'undefined') return

  if (keepHistory) {
    dispatch(
      push({
        search: '',
      }),
    )
    return
  }

  dispatch(
    replace({
      search: '',
    }),
  )
}
