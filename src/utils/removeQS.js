import { push, replace } from 'react-router-redux'
import { stringify, parse } from 'qs'

export default (dispatch, queryKey, keepHistory = false) => {
  if (typeof window === 'undefined') return

  const newQuery = {
    ...parse(window.location.search, { ignoreQueryPrefix: true }),
  }

  if (Array.isArray(queryKey)) {
    queryKey.forEach(key => {
      delete newQuery[key]
    })
  }

  if (typeof queryKey === 'string') {
    delete newQuery[queryKey]
  }

  if (keepHistory) {
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
