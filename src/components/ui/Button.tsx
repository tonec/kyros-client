import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import BaseButton from '@material-ui/core/Button'

type Props = ComponentPropsWithoutRef<typeof BaseButton> & {
  children: ReactNode
  testid?: string
}

function Button({
  children,
  color = 'default',
  disabled = false,
  type = 'button',
  variant = 'contained',
  autoFocus = false,
  classes,
  className,
  testid,
  onClick,
}: Props): JSX.Element {
  return (
    <BaseButton
      className={className}
      color={color}
      disabled={disabled}
      type={type}
      variant={variant}
      autoFocus={autoFocus}
      classes={classes}
      onClick={onClick}
      data-testid={testid || type}
    >
      {children}
    </BaseButton>
  )
}

// Used in ButtonsSpacer!
Button.displayName = 'Button'

export default Button
