import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'

const useContainerStyles = makeStyles(() => ({
  container: {
    textAlign: ({ variant }) => variant,
  },
}))

const useButtonStyles = makeStyles(theme => ({
  root: {
    margin: ({ variant }) => {
      if (variant === 'left') return theme.spacing(0, 2, 0, 0)
      if (variant === 'right') return theme.spacing(0, 0, 0, 2)
      return theme.spacing(0, 1)
    },
  },
}))

function ButtonsSpacer({ children, variant, className }) {
  const containerClasses = useContainerStyles({ variant })
  const buttonClasses = useButtonStyles({ variant })

  const els = React.Children.toArray(children)

  const allAreButtons = Object.keys(els).every(child => {
    return els[child].type.displayName === 'Button'
  })

  if (!allAreButtons) {
    // eslint-disable-next-line no-console
    console.warn(
      "Warning ButtonSpacer has children that aren't Button components",
    )
  }

  const newEls = els.map(el =>
    React.cloneElement(el, { classes: buttonClasses }),
  )

  return (
    <div className={cx(containerClasses.container, className)}>{newEls}</div>
  )
}

ButtonsSpacer.propTypes = {
  children: childrenType.isRequired,
  variant: PropTypes.oneOf(['left', 'right', 'center']),
  className: PropTypes.string,
}

ButtonsSpacer.defaultProps = {
  variant: 'right',
  className: '',
}

export default ButtonsSpacer
