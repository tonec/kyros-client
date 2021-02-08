import React from 'react'
import BaseInputLabel from '@material-ui/core/InputLabel'

function InputLabel({ children, disabled, className, htmlFor }) {
  return (
    <BaseInputLabel disabled={disabled} className={className} htmlFor={htmlFor}>
      {children}
    </BaseInputLabel>
  )
}

export default InputLabel
