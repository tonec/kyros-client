import React from 'react'
import PropTypes from 'prop-types'
import { clientsType } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { isFetchingClients } from 'redux/modules/api/selectors'
import { getVisibleClients } from 'redux/modules/client/selectors'
import { Loader } from 'components'
import ClientsTable from './ClientsTable'

function ClientsTableContainer({ isFetchingClients, clients }) {
  const history = useHistory()

  if (isFetchingClients) {
    return <Loader />
  }

  const handleRowClick = client => {
    history.push({
      search: `?client=${client.id}`,
    })
  }

  const columns = [
    {
      key: 'name',
      name: 'Client name',
    },
  ]

  return (
    <ClientsTable
      columns={columns}
      data={clients}
      handleRowClick={handleRowClick}
    />
  )
}

ClientsTableContainer.propTypes = {
  isFetchingClients: PropTypes.bool,
  clients: clientsType,
}

ClientsTableContainer.defaultProps = {
  isFetchingClients: true,
  clients: null,
}

const mapState = createStructuredSelector({
  isFetchingClients,
  clients: getVisibleClients,
})

export default connect(mapState)(ClientsTableContainer)
