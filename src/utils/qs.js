import { stringify, parse } from 'qs'
import history from './history'

export function add(queryObject, keepHistory = false) {
  if (typeof window === 'undefined') return

  const newQuery = {
    ...parse(window.location.search, { ignoreQueryPrefix: true }),
    ...queryObject,
  }

  if (keepHistory) {
    history.push({
      search: stringify(newQuery),
    })
    return
  }

  history.replace({
    search: stringify(newQuery),
  })
}

export function remove(queryKey, keepHistory = false) {
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
    history.push({
      search: stringify(newQuery),
    })
    return
  }

  history.replace({
    search: stringify(newQuery),
  })
}

export function clear(keepHistory = false) {
  if (typeof window === 'undefined') return

  if (keepHistory) {
    history.push({
      search: '',
    })
    return
  }

  history.replace({
    search: '',
  })
}
