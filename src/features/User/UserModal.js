import React from 'react'
import { Modal } from 'components'
import UserFormContainer from './UserFormContainer'

function UserModal() {
  return (
    <Modal name="user" title="Create user">
      {state => {
        const { id, view } = state

        if (view === 'view') {
          return <p>View</p>
        }

        if (view === 'edit') {
          return <UserFormContainer clientId={id} />
        }

        return <UserFormContainer />
      }}
    </Modal>
  )
}

export default UserModal
