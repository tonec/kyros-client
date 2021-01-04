import React from 'react'
import PropTypes from 'prop-types'
import { clientType } from 'types'
import { connect } from 'react-redux'
import { createClient, updateClient } from 'redux/modules/client/actions'
import { closeModal } from 'redux/modules/modal/actions'
import { getClient } from 'redux/modules/client/selectors'
import ClientForm from './ClientForm'

function ClientFormContainer({ dispatch, client }) {
  const isEdit = Boolean(client)

  const handleCancel = () => {
    dispatch(closeModal())
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
