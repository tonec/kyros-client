import React from 'react'
import { Locals } from 'types'
import loadable from '@loadable/component'
import { provideHooks } from 'redial'
import { fetchUsers } from 'redux/modules/user/actions'

const Users = loadable(() => import('./Users'))

function UsersLoadable(): JSX.Element {
  return (
    <div>
      <Users />
    </div>
  )
}

export const hooks = {
  fetch: ({ store }: Locals): any => {
    return store.dispatch(fetchUsers())
  },
}

export default provideHooks(hooks)(UsersLoadable)
