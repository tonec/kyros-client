/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentPropsWithoutRef } from 'react'
import { Spacing } from 'types'
import BaseBox from '@material-ui/core/Box'

type Props = ComponentPropsWithoutRef<typeof BaseBox> & {
  children: React.ReactNode
  spacing: Spacing
}

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
