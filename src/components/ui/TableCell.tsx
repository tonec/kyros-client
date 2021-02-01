import React, { ComponentPropsWithoutRef } from 'react'
import BaseTableCell from '@material-ui/core/TableCell'

type Props = ComponentPropsWithoutRef<typeof BaseTableCell> & {
  children: React.ReactNode
  className?: string
  testid?: string
}

function TableCell({
  children,
  variant,
  component,
  align,
  colSpan,
  className,
  style,
  testid,
  onClick,
}: Props): JSX.Element {
  return (
    <BaseTableCell
      align={align}
      variant={variant}
      component={component}
      colSpan={colSpan}
      className={className}
      style={style}
      data-testid={testid}
      onClick={onClick}
    >
      {children}
    </BaseTableCell>
  )
}

export default TableCell
