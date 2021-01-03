import React from 'react'
import PropTypes from 'prop-types'
import { clientType } from 'types'
import { connect } from 'react-redux'
import { createClient } from 'redux/modules/client/actions'
import { getClient } from 'redux/modules/client/selectors'
import ClientForm from './ClientForm'

function ClientFormContainer({ dispatch, client }) {
  const handleOnSubmit = data => {
    dispatch(createClient(data))
  }

  let initialValues = {}

  if (client) {
    initialValues = {
      name: client.name,
    }
  }

  return (
    <ClientForm initialValues={initialValues} handleOnSubmit={handleOnSubmit} />
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
