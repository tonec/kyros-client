import React, { ComponentPropsWithoutRef } from 'react'
import BaseTableRow from '@material-ui/core/TableRow'

type Props = ComponentPropsWithoutRef<typeof BaseTableRow> & {
  children: React.ReactNode
  testid?: string
}

function TableRow({
  children,
  hover,
  role,
  tabIndex,
  selected,
  style,
  className,
  testid,
}: Props): JSX.Element {
  return (
    <BaseTableRow
      hover={hover}
      role={role}
      tabIndex={tabIndex}
      selected={selected}
      style={style}
      className={className}
      data-testid={testid}
    >
      {children}
    </BaseTableRow>
  )
}

export default TableRow
