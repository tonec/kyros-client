import React from 'react'
import { User } from 'types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getInitialValues } from 'utils'
import { createUser, updateUser } from 'redux/modules/user/actions'
import { closeModal } from 'redux/modules/modal/actions'
import { getUser } from 'redux/modules/user/selectors'
import UserForm from './UserForm'
import { RootState } from 'redux/rootReducer'
import { Values } from './UserForm'

interface MappedState {
  user: User | null
}

interface OwnProps {
  userId?: string
}

type Props = OwnProps &
  MappedState & {
    createUser: (data: Partial<User>) => void
    updateUser: (id: string, data: Partial<User>) => void
    closeModal: () => void
  }

function UserFormContainer({ user, createUser, updateUser, closeModal }: Props): JSX.Element {
  const isEdit = Boolean(user)

  const handleCancel = () => {
    closeModal()
  }

  const handleOnSubmit = (data: Values) => {
    if (isEdit && user) {
      updateUser(user.id, data)
    } else {
      createUser(data)
    }
  }

  let initialValues = {}

  if (user) {
    initialValues = getInitialValues(user)
  }

  return (
    <UserForm
      isEdit={isEdit}
      initialValues={initialValues}
      handleCancel={handleCancel}
      handleOnSubmit={handleOnSubmit}
    />
  )
}

const mapState = createStructuredSelector<RootState, OwnProps, MappedState>({
  user: getUser,
})

const mapDispatch = {
  createUser,
  updateUser,
  closeModal,
}

export default connect(mapState, mapDispatch)(UserFormContainer)
