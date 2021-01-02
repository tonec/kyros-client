import React, { useState } from 'react'
import { provideHooks } from 'redial'
import { fetchClients } from 'redux/modules/client/actions'
import { Button, Main, PageHeader } from 'components'
import ClientsTableContainer from './ClientsTableContainer'
import ClientDialog from '../Client/ClientDialog'

function Clients() {
  const title = 'Clients'

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCreateClient = () => {
    setIsOpen(true)
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
      <ClientDialog isOpen={isOpen} handleClose={handleClose} />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(Clients)
