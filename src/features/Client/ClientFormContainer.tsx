import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'helpers/modalQS'
import { Client } from 'types'
import { RootState } from 'redux/rootReducer'
import { createClient, updateClient } from 'redux/modules/client/actions'
import { getClient } from 'redux/modules/client/selectors'
import ClientForm from './ClientForm'
import { Values } from './ClientForm'

type MappedProps = {
  client?: Client
}

type OwnProps = {
  clientId?: string
}

type Props = OwnProps &
  MappedProps & {
    createClient: (data: Partial<Client>) => void
    updateClient: (id: string, data: Partial<Client>) => void
  }

function ClientFormContainer({
  client,
  createClient,
  updateClient,
}: Props): JSX.Element {
  const isEdit = Boolean(client)

  const handleCancel = () => {
    closeModal()
  }

  const handleOnSubmit = (data: Values) => {
    if (isEdit && client) {
      updateClient(client.id, data)
    } else {
      createClient(data)
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

const mapState = createStructuredSelector<RootState, OwnProps, MappedProps>({
  client: getClient,
})

const mapDispatch = {
  createClient,
  updateClient,
}

export default connect(mapState, mapDispatch)(ClientFormContainer)
