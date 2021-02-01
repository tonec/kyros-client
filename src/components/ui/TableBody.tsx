import React from 'react'
import BaseTableBody from '@material-ui/core/TableBody'

type Props = {
  children: React.ReactNode
}

function TableBody({ children }: Props): JSX.Element {
  return <BaseTableBody>{children}</BaseTableBody>
}

export default TableBody
