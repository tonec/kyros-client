/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentPropsWithoutRef } from 'react'
import { Spacing } from 'types'
import BaseBox from '@material-ui/core/Box'

type BoxProps = ComponentPropsWithoutRef<typeof BaseBox>
type OwnProps = {
  children: React.ReactNode
  spacing: Spacing
}
type Props = BoxProps & OwnProps

function Box({
  children,
  clone,
  component,
  className,
  spacing,
}: Props): JSX.Element {
  return (
    <BaseBox
      clone={clone}
      component={component}
      className={className}
      {...spacing}
    >
      {children}
    </BaseBox>
  )
}

export default Box
