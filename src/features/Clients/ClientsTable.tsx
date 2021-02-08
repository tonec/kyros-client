import React from 'react'
import cx from 'clsx'
import { Client, Column } from 'types'
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

interface Props {
  columns: Column[]
  data: Client[]
  fallbackText?: string
  isFetching: boolean
  handleRowClick: (client: Client) => void
}

const { Head, Body, Row, Cell } = Table

function ClientsTable({
  columns,
  data,
  fallbackText = 'No data to display',
  isFetching,
  handleRowClick,
}: Props): JSX.Element {
  const classes = useStyles()

  if (isFetching) {
    return (
      <div>
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

export default ClientsTable
