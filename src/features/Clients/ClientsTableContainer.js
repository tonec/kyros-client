import React from 'react'
import PropTypes from 'prop-types'
import { clientsType } from 'types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { isFetchingClients } from 'redux/modules/fetch/selectors'
import { getVisibleClients } from 'redux/modules/client/selectors'
import { Loader } from 'components'
import ClientsTable from './ClientsTable'

function ClientsTableContainer({ isFetchingClients, clients }) {
  if (isFetchingClients) {
    return <Loader />
  }

  const columns = [
    {
      key: 'name',
      name: 'Client name',
    },
  ]

  return <ClientsTable columns={columns} data={clients} />
}

ClientsTableContainer.propTypes = {
  isFetchingClients: PropTypes.bool,
  clients: clientsType,
}

ClientsTableContainer.defaultProps = {
  isFetchingClients: false,
  clients: null,
}

const mapState = createStructuredSelector({
  isFetchingClients,
  clients: getVisibleClients,
})

export default connect(mapState)(ClientsTableContainer)
