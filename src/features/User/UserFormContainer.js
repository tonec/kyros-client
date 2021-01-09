import React from 'react'
import PropTypes from 'prop-types'
import { userType } from 'types'
import { connect } from 'react-redux'
import { getInitialValues } from 'utils'
import { createUser, updateUser } from 'redux/modules/user/actions'
import { closeModal } from 'redux/modules/modal/actions'
import { getUser } from 'redux/modules/user/selectors'
import UserForm from './UserForm'

function UserFormContainer({ dispatch, user }) {
  const isEdit = Boolean(user)

  const handleCancel = () => {
    dispatch(closeModal())
  }

  const handleOnSubmit = data => {
    if (isEdit) {
      dispatch(updateUser(user.id, data))
    } else {
      dispatch(createUser(data))
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

UserFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: userType,
}

UserFormContainer.defaultProps = {
  user: null,
}

const mapState = (state, { userId }) => ({
  user: getUser(state, userId),
})

export default connect(mapState)(UserFormContainer)
