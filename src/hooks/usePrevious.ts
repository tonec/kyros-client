import { useEffect, useRef, MutableRefObject } from 'react'

export default<T> (value: T): MutableRefObject<T | undefined>['current'] => {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
