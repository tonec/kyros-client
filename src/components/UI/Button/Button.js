import React from 'react'
import { Button as BaseButton } from 'grommet'

const propTypes = {}

const defaultProps = {}

const Button = props => {
  return (
    <BaseButton {...props} />
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
