import React from 'react'
import { provideHooks } from 'redial'
import { openModal } from 'helpers/modalQS'
import { fetchClients } from 'redux/modules/client/actions'
import { Button, Main, PageHeader } from 'components'
import ClientsTableContainer from './ClientsTableContainer'
import ClientModal from '../Client/ClientModal'

function Clients() {
  const title = 'Clients'

  const handleCreateClient = () => {
    openModal('client')
  }

  const headerActions = () => {
    return (
      <Button color="primary" onClick={handleCreateClient}>
        Create client
      </Button>
    )
  }

  return (
    <Main title={title}>
      <PageHeader title={title} renderActions={headerActions} />
      <ClientsTableContainer />
      <ClientModal />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(Clients)
