import React from 'react'
import { Modal } from 'components'
import ClientFormContainer from './ClientFormContainer'

function ClientModal() {
  return (
    <Modal name="client">
      {({ modalState: { view, id } }) => {
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
