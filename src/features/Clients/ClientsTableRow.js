import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Table } from 'components'
import ClientsTableRowActions from './ClientsTableRowActions'

const useStyles = makeStyles(theme => ({
  actions: {
    textAlign: 'right',
    padding: theme.spacing(0),
  },
}))

const { Row, Cell } = Table

function ClientsTableRow({ columns, item, handleRowClick }) {
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Row
      key={item.id}
      {...rowProps}
      style={rowStyle}
      testid={`row-${item.id}`}
      hover
    >
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
            {item[column.key]}
          </Cell>
        )
      })}
    </Row>
  )
}

ClientsTableRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.shape({ id: PropTypes.string }),
  handleRowClick: PropTypes.func,
}

ClientsTableRow.defaultProps = {
  columns: [],
  item: null,
  handleRowClick: null,
}

export default ClientsTableRow
