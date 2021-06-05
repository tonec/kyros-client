import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (props: any): void => {
  const prev = useRef(props)

  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps: any, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps)
    }

    prev.current = props
  })
}
