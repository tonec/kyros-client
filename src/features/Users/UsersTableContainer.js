import React from 'react'
import PropTypes from 'prop-types'
import { usersType } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { openModal } from 'utils/modalQS'
import { deleteUser } from 'redux/modules/user/actions'
import { isFetchingUsers } from 'redux/modules/api/selectors'
import { getVisibleUsers } from 'redux/modules/user/selectors'
import UsersTable from './UsersTable'

function UsersTableContainer({ dispatch, isFetchingUsers, users }) {
  const history = useHistory()

  if (isFetchingUsers) {
    return null
  }

  const handleRowClick = user => {
    history.push(`/user/${user.id}/schedule`)
  }

  const handleEdit = user => {
    openModal('user', {
      state: { id: user.id, view: 'edit' },
    })
  }

  const handleDelete = user => {
    dispatch(deleteUser(user.id))
  }

  const columns = [
    {
      key: 'firstName',
      name: 'First name',
    },
    {
      key: 'lastName',
      name: 'Last name',
    },
    { key: 'actions' },
  ]

  return (
    <UsersTable
      columns={columns}
      data={users}
      handleEditClick={handleEdit}
      handleDeleteClick={handleDelete}
      handleRowClick={handleRowClick}
    />
  )
}

UsersTableContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetchingUsers: PropTypes.bool,
  users: usersType,
}

UsersTableContainer.defaultProps = {
  isFetchingUsers: true,
  users: null,
}

const mapState = createStructuredSelector({
  isFetchingUsers,
  users: getVisibleUsers,
})

export default connect(mapState)(UsersTableContainer)
