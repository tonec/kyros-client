import React from 'react'
import { Column, User } from 'types'
import { makeStyles } from 'styles'
import { Table } from 'components'
import UsersTableRowActions from './UsersTableRowActions'

const useStyles = makeStyles({
  actions: {
    padding: 0,
    textAlign: 'right',
  },
})

interface Props {
  columns: Column[]
  item: User
  handleRowClick?: (item: User) => void
}

const { Row, Cell } = Table

function UsersTableRow({ columns, item, handleRowClick }: Props): JSX.Element {
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
              <UsersTableRowActions user={item} />
            </Cell>
          )
        }

        return (
          <Cell
            key={`${item.id}-${column.key}`}
            testid={`cell-${item.id}-${column.key}`}
            onClick={onRowClick}
          >
            {item[column.key as keyof User]}
          </Cell>
        )
      })}
    </Row>
  )
}

export default UsersTableRow
