import { stringify, parse } from 'qs'
import { Obj } from 'types'
import history from './history'

export function add(queryObject: Obj<string | number>, keepHistory = true): void {
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

export function remove(queryKey: string | string[], keepHistory = true): void {
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

export function clear(keepHistory = true): void {
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
