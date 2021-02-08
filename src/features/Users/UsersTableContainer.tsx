import React from 'react'
import { User } from 'types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { isFetchingUsers } from 'redux/modules/api/selectors'
import { getVisibleUsers } from 'redux/modules/user/selectors'
import UsersTable from './UsersTable'
import { RootState } from 'redux/rootReducer'

interface MappedState {
  isFetchingUsers: boolean
  users: User[]
}

type Props = MappedState

function UsersTableContainer({ isFetchingUsers, users }: Props): JSX.Element {
  const history = useHistory()

  const handleRowClick = (user: User) => {
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
      isFetching={isFetchingUsers}
      fallbackText="No users created. Click 'Add user' above to create one."
      handleRowClick={handleRowClick}
    />
  )
}

const mapState = createStructuredSelector<RootState, MappedState>({
  isFetchingUsers,
  users: getVisibleUsers,
})

export default connect(mapState)(UsersTableContainer)
