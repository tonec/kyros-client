import React from 'react'
import { provideHooks } from 'redial'
import { fetchClients } from 'redux/modules/client/actions'
import { Main } from 'components'
import ClientsTableContainer from './ClientsTableContainer'

function Clients() {
  return (
    <Main title="Clients">
      <ClientsTableContainer />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(Clients)
