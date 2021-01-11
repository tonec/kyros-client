import React from 'react'
import { provideHooks } from 'redial'
import { fetchClients } from 'redux/modules/client/actions'
import { Main } from 'components'
import Clients from './Clients'

function ClientsView() {
  const title = 'Clients'

  return (
    <Main title={title}>
      <Clients />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(ClientsView)
