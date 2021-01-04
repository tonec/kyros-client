import React from 'react'
import PropTypes from 'prop-types'
import { clientsType } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { deleteClient } from 'redux/modules/client/actions'
import { openModal } from 'redux/modules/modal/actions'
import { isFetchingClients } from 'redux/modules/api/selectors'
import { getVisibleClients } from 'redux/modules/client/selectors'
import { Loader } from 'components'
import ClientsTable from './ClientsTable'

function ClientsTableContainer({ dispatch, isFetchingClients, clients }) {
  const history = useHistory()

  if (isFetchingClients) {
    return <Loader />
  }

  const handleRowClick = client => {
    history.push(`/client/${client.id}`)
  }

  const handleEdit = client => {
    dispatch(
      openModal('client', {
        state: { id: client.id, view: 'edit' },
      }),
    )
  }

  const handleDelete = client => {
    dispatch(deleteClient(client.id))
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
      handleEditClick={handleEdit}
      handleDeleteClick={handleDelete}
      handleRowClick={handleRowClick}
    />
  )
}

ClientsTableContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
