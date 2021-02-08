import React from 'react'
import BaseTableHead from '@material-ui/core/TableHead'

interface Props {
  children: React.ReactNode
}

function TableHead({ children }: Props): JSX.Element {
  return <BaseTableHead>{children}</BaseTableHead>
}

export default TableHead
