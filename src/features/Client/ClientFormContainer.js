import React from 'react'
import PropTypes from 'prop-types'
import { clientType } from 'types'
import { connect } from 'react-redux'
import { closeModal } from 'utils/modalQS'
import { createClient, updateClient } from 'redux/modules/client/actions'
import { getClient } from 'redux/modules/client/selectors'
import ClientForm from './ClientForm'

function ClientFormContainer({ dispatch, client }) {
  const isEdit = Boolean(client)

  const handleCancel = () => {
    closeModal()
  }

  const handleOnSubmit = data => {
    if (isEdit) {
      dispatch(updateClient(client.id, data))
    } else {
      dispatch(createClient(data))
    }
  }

  let initialValues = {}

  if (client) {
    initialValues = {
      name: client.name,
    }
  }

  return (
    <ClientForm
      isEdit={isEdit}
      initialValues={initialValues}
      handleCancel={handleCancel}
      handleOnSubmit={handleOnSubmit}
    />
  )
}

ClientFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  client: clientType,
}

ClientFormContainer.defaultProps = {
  client: null,
}

const mapState = (state, { clientId }) => ({
  client: getClient(state, clientId),
})

export default connect(mapState)(ClientFormContainer)
