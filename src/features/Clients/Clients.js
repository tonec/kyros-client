import React from 'react'
import PropTypes from 'prop-types'
import { clientsType } from 'types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { createStructuredSelector } from 'reselect'
import { isFetchingClients } from 'redux/modules/fetch/selectors'
import { fetchClients } from 'redux/modules/client/actions'
import { getVisibleClients } from 'redux/modules/client/selectors'
import { Main, Loader } from 'components'
import ClientsList from './ClientsList'

function Clients({ isFetchingClients, clients }) {
  if (isFetchingClients) {
    return <Loader />
  }

  return (
    <Main title="Clients">
      <ClientsList clients={clients} />
    </Main>
  )
}

Clients.propTypes = {
  isFetchingClients: PropTypes.bool,
  clients: clientsType,
}

Clients.defaultProps = {
  isFetchingClients: false,
  clients: null,
}

const mapState = createStructuredSelector({
  isFetchingClients,
  clients: getVisibleClients,
})

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchClients()),
}

export default compose(provideHooks(hooks), connect(mapState))(Clients)
