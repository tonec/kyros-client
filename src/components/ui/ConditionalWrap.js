import React from 'react'
import PropTypes, { arrayOf, node, bool, func } from 'prop-types'

function ConditionalWrap({ condition, wrap, children }) {
  return condition ? wrap(children) : <>{children}</>
}

ConditionalWrap.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrap: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
}

export default ConditionalWrap
