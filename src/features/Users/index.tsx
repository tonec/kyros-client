import React from 'react'
import { provideHooks } from 'redial'
import { fetchUsers } from 'redux/modules/user/actions'
import { Main } from 'components'
import Users from './Users'
import { Store } from 'redux'

function UsersView(): JSX.Element {
  const title = 'Users'

  return (
    <Main title={title}>
      <Users />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }: { store: Store }) => store.dispatch(fetchUsers()),
}

export default provideHooks(hooks)(UsersView)
