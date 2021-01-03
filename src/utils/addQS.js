import { push, replace } from 'react-router-redux'
import { stringify, parse } from 'qs'

export default (dispatch, queryObject, history = false) => {
  if (typeof window === 'undefined') return

  const newQuery = {
    ...parse(window.location.search, { ignoreQueryPrefix: true }),
    ...queryObject,
  }

  if (history) {
    dispatch(
      push({
        search: stringify(newQuery),
      }),
    )
    return
  }

  dispatch(
    replace({
      search: stringify(newQuery),
    }),
  )
}
