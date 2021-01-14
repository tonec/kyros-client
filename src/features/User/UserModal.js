import React from 'react'
import { Modal } from 'components'
import UserFormContainer from './UserFormContainer'

function UserModal() {
  const title = {
    create: 'Create user',
    edit: 'Edit user',
  }

  return (
    <Modal name="user" title={title}>
      {state => {
        const { id, view } = state

        if (view === 'view') {
          return <p>View</p>
        }

        if (view === 'edit') {
          return <UserFormContainer userId={id} />
        }

        return <UserFormContainer />
      }}
    </Modal>
  )
}

export default UserModal
