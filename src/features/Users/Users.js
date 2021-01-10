import React from 'react'
import { provideHooks } from 'redial'
import { openModal } from 'helpers/modalQS'
import { fetchUsers } from 'redux/modules/user/actions'
import { Button, Main, PageHeader } from 'components'
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
    <Main title={title}>
      <PageHeader title={title} renderActions={headerActions} />
      <UsersTableContainer />
      <UserModal />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchUsers()),
}

export default provideHooks(hooks)(Users)
