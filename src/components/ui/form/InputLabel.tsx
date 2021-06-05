import React, { ComponentPropsWithoutRef } from 'react'
import BaseInputLabel from '@material-ui/core/InputLabel'

type Props = ComponentPropsWithoutRef<typeof BaseInputLabel>

function InputLabel({ children, disabled, className, htmlFor }: Props): JSX.Element {
  return (
    <BaseInputLabel disabled={disabled} className={className} htmlFor={htmlFor}>
      {children}
    </BaseInputLabel>
  )
}

export default InputLabel
