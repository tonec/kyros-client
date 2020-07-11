import React from 'react'
import { Button as BaseButton } from 'grommet'

const Button = props => {
  return (
    <BaseButton {...props} />
  )
}

Button.propTypes = {}
Button.defaultProps = {}

export default Button
