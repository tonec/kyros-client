import React from 'react'
import PropTypes from 'prop-types'
import { clientsType } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { isFetchingClients } from 'redux/modules/api/selectors'
import { getVisibleClients } from 'redux/modules/client/selectors'
import ClientsTable from './ClientsTable'

function ClientsTableContainer({ isFetchingClients, clients }) {
  const history = useHistory()

  const handleRowClick = client => {
    history.push(`/client/${client.id}/schedule`)
  }

  const columns = [
    {
      key: 'name',
      name: 'Client name',
    },
    { key: 'actions' },
  ]

  return (
    <ClientsTable
      columns={columns}
      data={clients}
      isFetching={isFetchingClients}
      fallbackText="No clients created. Click 'Add client' above to create one."
      handleRowClick={handleRowClick}
    />
  )
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
