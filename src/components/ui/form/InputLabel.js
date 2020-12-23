import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseInputLabel from '@material-ui/core/InputLabel'

function InputLabel({ children, disabled, className, htmlFor }) {
  return (
    <BaseInputLabel disabled={disabled} className={className} htmlFor={htmlFor}>
      {children}
    </BaseInputLabel>
  )
}

InputLabel.propTypes = {
  children: childrenType.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
}

InputLabel.defaultProps = {
  disabled: false,
  className: null,
  htmlFor: null,
}

export default InputLabel
