import React from 'react'
import PropTypes from 'prop-types'
import { usersType } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { isFetchingUsers } from 'redux/modules/api/selectors'
import { getVisibleUsers } from 'redux/modules/user/selectors'
import UsersTable from './UsersTable'

function UsersTableContainer({ isFetchingUsers, users }) {
  const history = useHistory()

  if (isFetchingUsers) {
    return null
  }

  const handleRowClick = user => {
    history.push(`/user/${user.id}/schedule`)
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
      fallbackText="No users created. Click 'Add user' above to create one."
      handleRowClick={handleRowClick}
    />
  )
}

UsersTableContainer.propTypes = {
  isFetchingUsers: PropTypes.bool,
  users: usersType,
}

UsersTableContainer.defaultProps = {
  isFetchingUsers: false,
  users: null,
}

const mapState = createStructuredSelector({
  isFetchingUsers,
  users: getVisibleUsers,
})

export default connect(mapState)(UsersTableContainer)
