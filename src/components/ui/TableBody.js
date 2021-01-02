import React from 'react'
import { childrenType } from 'types'
import BaseTableBody from '@material-ui/core/TableBody'

function TableBody({ children }) {
  return <BaseTableBody>{children}</BaseTableBody>
}

TableBody.propTypes = {
  children: childrenType.isRequired,
}

export default TableBody
