import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>
}

Label.propTypes = {
  children: childrenType.isRequired,
  htmlFor: PropTypes.string.isRequired,
}

export default Label
