import React from 'react'
import PropTypes from 'prop-types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Loader, Table } from 'components'
import ClientsTableRow from './ClientsTableRow'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
  },
  actions: {
    textAlign: 'right',
  },
}))

const { Head, Body, Row, Cell } = Table

function ClientsTable({
  columns,
  data,
  fallbackText,
  isFetching,
  handleRowClick,
}) {
  const classes = useStyles()

  if (isFetching) {
    return (
      <div className={classes.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Card flush>
        <Table>
          <Head>
            <Row>
              {columns.map(column => (
                <Cell
                  key={column.key}
                  className={cx({
                    [classes.actions]: column.key === 'actions',
                  })}
                >
                  {column.name}
                </Cell>
              ))}
            </Row>
          </Head>
          <Body>
            {data.length > 0 &&
              data.map(item => (
                <ClientsTableRow
                  key={item.id}
                  item={item}
                  columns={columns}
                  handleRowClick={handleRowClick}
                />
              ))}
            {data.length === 0 && (
              <Row>
                <Cell colSpan={columns.length} align="center">
                  {fallbackText}
                </Cell>
              </Row>
            )}
          </Body>
        </Table>
      </Card>
    </div>
  )
}

ClientsTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  fallbackText: PropTypes.string,
  isFetching: PropTypes.bool,
  handleRowClick: PropTypes.func,
}

ClientsTable.defaultProps = {
  data: [],
  fallbackText: 'No data to display',
  isFetching: false,
  handleRowClick: null,
}

export default ClientsTable
