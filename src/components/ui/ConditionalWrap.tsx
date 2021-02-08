import React from 'react'

interface Props {
  condition: boolean
  wrap: (children: React.ReactNode) => React.ReactElement
  children: React.ReactNode
}

const ConditionalWrap = ({ condition, wrap, children }: Props): JSX.Element => {
  return condition ? wrap(children) : <>{children}</>
}

export default ConditionalWrap
