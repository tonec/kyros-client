import React from 'react'
import { provideHooks } from 'redial'
import { useDispatch } from 'react-redux'
import { fetchClients } from 'redux/modules/client/actions'
import { openModal } from 'redux/modules/modal/actions'
import { Button, Main, PageHeader } from 'components'
import ClientsTableContainer from './ClientsTableContainer'
import ClientModal from '../Client/ClientModal'

function Clients() {
  const dispatch = useDispatch()

  const title = 'Clients'

  const handleCreateClient = () => {
    dispatch(openModal('client'))
  }

  const handleRowClick = client => {
    dispatch(
      openModal('client', {
        state: { id: client.id, view: 'edit' },
      }),
    )
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
      <ClientsTableContainer handleRowClick={handleRowClick} />
      <ClientModal />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(Clients)
