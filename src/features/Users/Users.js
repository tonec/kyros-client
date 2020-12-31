import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { fetchUsers } from 'redux/modules/user/actions'
import { isFetching, getVisibleUsers } from 'redux/modules/user/selectors'
import { getFullName } from 'utils/entity'
import { Main } from 'components'

function Users({ isFetching, users }) {
  console.log('users', users)
  console.log('isFetching', isFetching)
  if (isFetching) {
    return null
  }

  return (
    <Main title="Users">
      <h2>Users lists:</h2>
      <ul>
        {users.length > 0 &&
          users.map(user => <li key={user.id}>{getFullName(user)}</li>)}
      </ul>
    </Main>
  )
}

Users.propTypes = {
  isFetching: PropTypes.bool,
  users: PropTypes.array,
}

Users.defaultProps = {
  isFetching: false,
  users: null,
}

const mapState = state => ({
  isFetching: isFetching(state),
  users: getVisibleUsers(state),
})

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchUsers()),
}

export default compose(provideHooks(hooks), connect(mapState))(Users)
