import React from 'react'
import { Modal } from 'components'
import ClientFormContainer from './ClientFormContainer'

function ClientModal() {
  const title = {
    create: 'Create client',
    edit: 'Edit client',
  }

  return (
    <Modal name="client" title={title}>
      {state => {
        const { id, view } = state

        if (view === 'view') {
          return <p>View</p>
        }

        if (view === 'edit') {
          return <ClientFormContainer clientId={id} />
        }

        return <ClientFormContainer />
      }}
    </Modal>
  )
}

export default ClientModal
