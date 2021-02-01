import React from 'react'
import { childrenType } from 'types'
import BaseTableHead from '@material-ui/core/TableHead'

type Props = {
  children: React.ReactNode
}

function TableHead({ children }: Props): JSX.Element {
  return <BaseTableHead>{children}</BaseTableHead>
}

TableHead.propTypes = {
  children: childrenType.isRequired,
}

export default TableHead
