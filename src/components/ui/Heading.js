import React from 'react'
import { childrenType } from 'types'
import { Heading as BaseHeading } from 'grommet'

function Heading({ children, ...rest }) {
  return <BaseHeading {...rest}>{children}</BaseHeading>
}

Heading.propTypes = {
  children: childrenType.isRequired,
}

Heading.defaultProps = {}

export default Heading
