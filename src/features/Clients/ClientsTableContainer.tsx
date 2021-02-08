import React from 'react'
import { Client, Column } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { isFetchingClients } from 'redux/modules/api/selectors'
import { getVisibleClients } from 'redux/modules/client/selectors'
import { RootState } from 'redux/rootReducer'
import ClientsTable from './ClientsTable'

interface Props {
  isFetchingClients: boolean
  clients: Client[]
}

function ClientsTableContainer({ isFetchingClients, clients }: Props): JSX.Element {
  const history = useHistory()

  const handleRowClick = (client: Client) => {
    history.push(`/client/${client.id}/schedule`)
  }

  const columns: Column[] = [
    {
      key: 'name',
      name: 'Client name',
    },
    { key: 'actions' },
  ]

  return (
    <ClientsTable
      columns={columns}
      data={clients}
      isFetching={isFetchingClients}
      fallbackText="No clients created. Click 'Add client' above to create one."
      handleRowClick={handleRowClick}
    />
  )
}

const mapState = createStructuredSelector<RootState, Props>({
  isFetchingClients,
  clients: getVisibleClients,
})

export default connect(mapState)(ClientsTableContainer)
