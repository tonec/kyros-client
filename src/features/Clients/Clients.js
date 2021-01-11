import React from 'react'
import { openModal } from 'helpers/modalQS'
import { Button, PageHeader } from 'components'
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
    <>
      <PageHeader title={title} renderActions={headerActions} />
      <ClientsTableContainer />
      <ClientModal />
    </>
  )
}

export default Clients
