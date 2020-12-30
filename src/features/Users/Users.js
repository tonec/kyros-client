import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { fetchUsers } from 'redux/modules/user/actions'
import { getVisibleUsers } from 'redux/modules/user/selectors'
import { getFullName } from 'utils/entity'
import { Main } from 'components'

function Users({ users }) {
  const renderUsers = () => {
    return users.map(user => <li key={user.id}>{getFullName(user)}</li>)
  }

  return (
    <Main title="Users">
      <h2>Users lists:</h2>
      <ul>{renderUsers()}</ul>
    </Main>
  )
}

Users.propTypes = {
  users: PropTypes.array,
}

Users.defaultProps = {
  users: null,
}

const mapState = state => ({ users: getVisibleUsers(state) })

const hooks = {
  fetch: ({ store }) => store.dispatch(fetchUsers()),
}

export default compose(provideHooks(hooks), connect(mapState))(Users)
