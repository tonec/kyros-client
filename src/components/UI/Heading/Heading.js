import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { Heading as BaseHeading } from 'grommet'

const Heading = ({ children, ...rest }) => {
  return (
    <BaseHeading {...rest}>
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}

Heading.defaultProps = {}

export default Heading
