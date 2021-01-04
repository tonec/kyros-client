import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Icon, IconButton, Table } from 'components'

const useStyles = makeStyles({
  actions: {
    padding: 0,
    textAlign: 'right',
  },
})

const { Row, Cell } = Table

function ClientsTableRow({
  columns,
  item,
  handleRowClick,
  handleEditClick,
  handleDeleteClick,
}) {
  const classes = useStyles()

  const onRowClick = () => {
    if (typeof handleRowClick === 'function') {
      handleRowClick(item)
    }
  }

  const onEdit = e => {
    e.stopPropagation()

    if (typeof handleEditClick === 'function') {
      handleEditClick(item)
    }
  }

  const onDelete = e => {
    e.stopPropagation()

    if (typeof handleDeleteClick === 'function') {
      handleDeleteClick(item)
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
              <IconButton aria-label="edit" onClick={onEdit}>
                <Icon variant="edit" />
              </IconButton>
              <IconButton aria-label="delete" onClick={onDelete}>
                <Icon variant="delete" />
              </IconButton>
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
  handleEditClick: PropTypes.func,
  handleRowClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
}

ClientsTableRow.defaultProps = {
  columns: [],
  item: null,
  handleRowClick: null,
  handleEditClick: null,
  handleDeleteClick: null,
}

export default ClientsTableRow
