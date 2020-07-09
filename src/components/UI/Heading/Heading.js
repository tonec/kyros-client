import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { Heading as BaseHeading } from 'grommet'

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}

const defaultProps = {}

const Heading = ({ children, ...rest }) => {
  return (
    <BaseHeading {...rest}>
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
