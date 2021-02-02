import React, { Dispatch } from 'react'
import PropTypes from 'prop-types'
import { APIAction, clientType } from 'types'
import { connect } from 'react-redux'
import { closeModal } from 'helpers/modalQS'
import { createClient, updateClient } from 'redux/modules/client/actions'
import { getClient } from 'redux/modules/client/selectors'
import ClientForm from './ClientForm'
import { Client } from 'types/entity'
import { RootState } from 'redux/rootReducer'
import { Values } from './ClientForm'

type Props = {
  dispatch: Dispatch<(id: string, data: Values) => APIAction>
  clientId: string
  client: Client
}

function ClientFormContainer({ dispatch, client }: Props): JSX.Element {
  const isEdit = Boolean(client)

  const handleCancel = () => {
    closeModal()
  }

  const handleOnSubmit = (data: Values) => {
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

const mapState = (state: RootState, { clientId }: Props) => ({
  client: getClient(state, clientId),
})

export default connect(mapState)(ClientFormContainer)
