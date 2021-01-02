import React from 'react'
import { provideHooks } from 'redial'
import { fetchClients } from 'redux/modules/client/actions'
import { Main, PageHeader } from 'components'
import ClientsTableContainer from './ClientsTableContainer'

function Clients() {
  const title = 'Clients'

  return (
    <Main title={title}>
      <PageHeader title={title} />
      <ClientsTableContainer />
    </Main>
  )
}

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default provideHooks(hooks)(Clients)
