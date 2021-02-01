import React, { ComponentPropsWithoutRef } from 'react'
import BaseTypography from '@material-ui/core/Typography'

type Props = ComponentPropsWithoutRef<typeof BaseTypography> & {
  component?: React.ElementType
  testid?: string
}

function Typography({
  children,
  align,
  color,
  display,
  gutterBottom,
  noWrap,
  paragraph,
  variant,
  className,
  testid,
}: Props): JSX.Element {
  return (
    <BaseTypography
      align={align}
      color={color}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
      className={className}
      data-testid={testid}
    >
      {children}
    </BaseTypography>
  )
}

export default Typography
