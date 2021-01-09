import React from 'react'
import PropTypes from 'prop-types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Loader, Table } from 'components'
import UsersTableRow from './UsersTableRow'

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
  },
  wrap: {
    marginTop: theme.spacing(4),
  },
  actions: {
    textAlign: 'right',
  },
}))

const { Container, Head, Body, Row, Cell } = Table

function UsersTable({
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
    <Container>
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
                <UsersTableRow
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
    </Container>
  )
}

UsersTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  fallbackText: PropTypes.string,
  isFetching: PropTypes.bool,
  handleRowClick: PropTypes.func,
}

UsersTable.defaultProps = {
  data: [],
  fallbackText: 'No data to display',
  isFetching: false,
  handleRowClick: null,
}

export default UsersTable
