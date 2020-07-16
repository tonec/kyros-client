import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'

function FormControl({ children, isError, error }) {
  return (
    <div>
      {children}
      <span className="error-container">
        {isError && error && (
          <small className="error-message">
            X
            <span>{error}</span>
          </small>
        )}
      </span>
    </div>
  )
}

FormControl.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  isError: PropTypes.bool,
  error: PropTypes.string
}

FormControl.defaultProps = {
  isError: false,
  error: null
}

export default FormControl
