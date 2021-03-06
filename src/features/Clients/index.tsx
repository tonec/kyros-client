import React from 'react'
import { provideHooks } from 'redial'
import { fetchClients } from 'redux/modules/client/actions'
import { Main } from 'components'
import Clients from './Clients'
import { Store } from 'redux'

function ClientsView(): JSX.Element {
  const title = 'Clients'

  return (
    <Main title={title}>
      <Clients />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }: { store: Store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(ClientsView)
