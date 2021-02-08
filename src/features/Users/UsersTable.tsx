import React from 'react'
import { Column, User } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import { Card, Loader, Table } from 'components'
import UsersTableRow from './UsersTableRow'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
  },
  actions: {
    textAlign: 'right',
  },
}))

interface Props {
  columns: Column[]
  data: User[]
  fallbackText?: string
  isFetching: boolean
  handleRowClick: (client: User) => void
}

const { Head, Body, Row, Cell } = Table

function UsersTable({
  columns,
  data,
  fallbackText = 'No data to display',
  isFetching,
  handleRowClick,
}: Props): JSX.Element {
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
    </div>
  )
}

export default UsersTable
