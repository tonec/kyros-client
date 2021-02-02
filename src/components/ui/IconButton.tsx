/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentPropsWithoutRef } from 'react'
import BaseIconButton from '@material-ui/core/IconButton'

type Props = ComponentPropsWithoutRef<typeof BaseIconButton> & {
  testid?: string
}

function IconButton({
  children,
  color,
  className,
  testid,
  onClick,
}: Props): JSX.Element {
  return (
    <BaseIconButton
      color={color}
      className={className}
      data-testid={testid}
      onClick={onClick}
    >
      {children}
    </BaseIconButton>
  )
}

export default IconButton
