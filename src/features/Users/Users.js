import React from 'react'
import { openModal } from 'helpers/modalQS'
import { Button, PageHeader } from 'components'
import UsersTableContainer from './UsersTableContainer'
import UserModal from '../User/UserModal'

function Users() {
  const title = 'Users'

  const handleCreateUser = () => {
    openModal('user')
  }

  const headerActions = () => {
    return (
      <Button color="primary" onClick={handleCreateUser}>
        Create user
      </Button>
    )
  }

  return (
    <>
      <PageHeader title={title} renderActions={headerActions} />
      <UsersTableContainer />
      <UserModal />
    </>
  )
}

export default Users
