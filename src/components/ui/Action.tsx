import React from 'react'
import cx from 'clsx'
import { makeStyles, color } from 'styles'

type UseStylesProps = {
  variant?: string
  disabled?: boolean
}

const useStyles = makeStyles(theme => {
  return {
    button: {
      fontSize: 14,
      fontWeight: 700,
      border: 'none',
      outline: 'none',
      height: 56,
      lineHeight: '56px',
      textAlign: 'center',
      width: '100%',
      boxShadow: '0px -1px 1px 0px rgba(122, 133, 135, 0.25)',

      cursor: ({ disabled }: UseStylesProps) =>
        disabled ? 'initial' : 'pointer',

      color: ({ variant, disabled }: UseStylesProps) => {
        if (disabled) {
          return theme.palette.grey[500]
        }
        return variant === 'primary' ? color('white') : color('primary')
      },

      backgroundColor: ({ variant, disabled }: UseStylesProps) => {
        if (disabled) {
          return theme.palette.grey[300]
        }
        return variant === 'primary' ? color('primary') : '#f9f9f9'
      },

      '&:hover': {
        color: ({ variant, disabled }: UseStylesProps) => {
          if (disabled) {
            return theme.palette.grey[500]
          }
          return variant === 'primary' ? color('white') : color('primary.dark')
        },
      },
    },
  }
})

type Props = {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit' | undefined
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
  onClick: () => void
}

function Action({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className,
  onClick,
}: Props): JSX.Element {
  const classes = useStyles({ variant, disabled })

  return (
    <button
      type={type}
      className={cx(classes.button, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Action
