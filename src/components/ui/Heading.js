import React from 'react'
import PropTypes, { oneOfType, arrayOf, node } from 'prop-types'
import { Heading as BaseHeading } from 'grommet'

function Heading({ children, ...rest }) {
  return <BaseHeading {...rest}>{children}</BaseHeading>
}

Heading.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
}

Heading.defaultProps = {}

export default Heading
