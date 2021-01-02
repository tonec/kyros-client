import React from 'react'
import { Modal } from 'components'
import ClientFormContainer from './ClientFormContainer'

function ClientModal() {
  return (
    <Modal name="client">
      <ClientFormContainer />
    </Modal>
  )
}

export default ClientModal
