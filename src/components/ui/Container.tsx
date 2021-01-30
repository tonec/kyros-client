import React, { ComponentPropsWithoutRef } from 'react'
import BaseContainer from '@material-ui/core/Container'

type Props = ComponentPropsWithoutRef<typeof BaseContainer>

function Container({
  children,
  classes,
  className,
  disableGutters,
  fixed,
  maxWidth,
}: Props): JSX.Element {
  return (
    <BaseContainer
      classes={classes}
      className={className}
      disableGutters={disableGutters}
      fixed={fixed}
      maxWidth={maxWidth}
      data-testid="container"
    >
      {children}
    </BaseContainer>
  )
}

export default Container
