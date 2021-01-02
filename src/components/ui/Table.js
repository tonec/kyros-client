import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTable from '@material-ui/core/Table'
import TableContainer from './TableContainer'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

function Table({ children, className }) {
  return <BaseTable className={className}>{children}</BaseTable>
}

Table.propTypes = {
  children: childrenType.isRequired,
  className: PropTypes.string,
}

Table.defaultProps = {
  className: null,
}

Table.Container = TableContainer
Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table
