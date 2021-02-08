import React from 'react'
import { Client, Column } from 'types'
import { makeStyles } from '@material-ui/core/styles'
import { Table } from 'components'
import ClientsTableRowActions from './ClientsTableRowActions'

const useStyles = makeStyles(theme => ({
  actions: {
    textAlign: 'right',
    padding: theme.spacing(0),
  },
}))

interface Props {
  columns: Column[]
  item: Client
  handleRowClick?: (item: Client) => void
}

const { Row, Cell } = Table

function ClientsTableRow({ columns, item, handleRowClick }: Props): JSX.Element {
  const classes = useStyles()

  const onRowClick = () => {
    if (typeof handleRowClick === 'function') {
      handleRowClick(item)
    }
  }

  let rowProps = {}
  let rowStyle = {}

  if (handleRowClick) {
    rowProps = {
      hover: true,
      role: 'button',
      tabIndex: -1,
    }

    rowStyle = {
      cursor: 'pointer',
    }
  }

  return (
    <Row key={item.id} {...rowProps} style={rowStyle} testid={`row-${item.id}`} hover>
      {columns.map(column => {
        if (column.key === 'actions') {
          return (
            <Cell
              key={`${item.id}-${column.key}`}
              className={classes.actions}
              testid={`cell-${item.id}-${column.key}`}
              onClick={onRowClick}
            >
              <ClientsTableRowActions client={item} />
            </Cell>
          )
        }

        return (
          <Cell
            key={`${item.id}-${column.key}`}
            testid={`cell-${item.id}-${column.key}`}
            onClick={onRowClick}
          >
            {item[column.key as keyof Client]}
          </Cell>
        )
      })}
    </Row>
  )
}

export default ClientsTableRow
