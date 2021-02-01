import React from 'react'
import BaseTableContainer from '@material-ui/core/TableContainer'

type Props = {
  children: React.ReactNode
  component?: React.ElementType
  className?: string
}

function TableContainer({
  children,
  component = 'div',
  className,
}: Props): JSX.Element {
  return (
    <BaseTableContainer component={component} className={className}>
      {children}
    </BaseTableContainer>
  )
}

export default TableContainer
