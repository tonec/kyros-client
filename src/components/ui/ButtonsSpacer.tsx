import React from 'react'
import cx from 'clsx'
import { ReactElementWithDisplayName } from 'types'
import { makeStyles } from 'styles'

interface UseStyleProps {
  variant: 'left' | 'center' | 'right'
}

const useContainerStyles = makeStyles(() => ({
  container: {
    textAlign: ({ variant }: UseStyleProps) => variant,
  },
}))

const useButtonStyles = makeStyles(theme => ({
  root: {
    margin: ({ variant }: UseStyleProps) => {
      if (variant === 'left') return theme.spacing(0, 2, 0, 0)
      if (variant === 'right') return theme.spacing(0, 0, 0, 2)
      return theme.spacing(0, 1)
    },
  },
}))

interface Props {
  children: React.ReactNode
  variant?: 'left' | 'right' | 'center'
  className?: string
}

function ButtonsSpacer({ children, variant = 'right', className }: Props): JSX.Element {
  const containerClasses = useContainerStyles({ variant })
  const buttonClasses = useButtonStyles({ variant })

  const els = React.Children.toArray(children) as ReactElementWithDisplayName[]

  const allAreButtons = els.every(child => {
    return child.type.displayName === 'Button'
  })

  if (!allAreButtons) {
    console.warn("Warning ButtonSpacer has children that aren't Button components")
  }

  const newEls = els.map(el => React.cloneElement(el, { classes: buttonClasses }))

  return <div className={cx(containerClasses.container, className)}>{newEls}</div>
}

export default ButtonsSpacer
