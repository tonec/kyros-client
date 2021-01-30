import React, { ComponentPropsWithoutRef } from 'react'
import BaseGrid from '@material-ui/core/Grid'

type Props = ComponentPropsWithoutRef<typeof BaseGrid>

function Grid({
  children,
  container,
  spacing,
  justify,
  direction,
  alignItems,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
}: Props): JSX.Element {
  if (container) {
    return (
      <BaseGrid
        container={container}
        spacing={spacing}
        justify={justify}
        direction={direction}
        alignItems={alignItems}
        className={className}
      >
        {children}
      </BaseGrid>
    )
  }

  return (
    <BaseGrid
      item={item}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={className}
    >
      {children}
    </BaseGrid>
  )
}

export default Grid
