import React from 'react'
import BaseTable from '@material-ui/core/Table'
import TableContainer from './TableContainer'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

type Props = {
  children: React.ReactNode
  className?: string
}

function Table({ children, className }: Props): JSX.Element {
  return <BaseTable className={className}>{children}</BaseTable>
}

Table.Container = TableContainer
Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table
