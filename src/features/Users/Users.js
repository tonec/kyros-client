import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { Main } from 'components'

function Users({ users }) {
  const renderUsers = () => {
    return users.map(user => <li key={user.id}>{user.name}</li>)
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
  users: [],
}

const mapState = ({ user }) => ({ users: user })

const hooks = {
  fetch: async () => {
    console.log('fetcs')
  },
  defer: async () => {
    console.log('defer')
  },
}

export default compose(provideHooks(hooks), connect(mapState))(Users)
