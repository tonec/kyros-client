import React, { ComponentPropsWithoutRef } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = ComponentPropsWithoutRef<typeof CircularProgress> & {
  size?: number
}

function Progress({
  variant,
  size = 40,
  value,
  className,
}: Props): JSX.Element {
  return (
    <CircularProgress
      variant={variant}
      size={size}
      value={value}
      className={className}
    />
  )
}

export default Progress
