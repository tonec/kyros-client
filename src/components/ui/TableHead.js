import React from 'react'
import { childrenType } from 'types'
import BaseTableHead from '@material-ui/core/TableHead'

function TableHead({ children }) {
  return <BaseTableHead>{children}</BaseTableHead>
}

TableHead.propTypes = {
  children: childrenType.isRequired,
}

export default TableHead
