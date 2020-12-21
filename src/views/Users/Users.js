import React, { Component } from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import { LayoutMain } from 'components'

class Users extends Component {
  static propTypes = {
    users: array,
  }

  static defaultProps = {
    users: [],
  }

  renderUsers() {
    const { users } = this.props

    return users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return (
      <LayoutMain title="Users">
        <h2>Users lists:</h2>
        <ul>{this.renderUsers()}</ul>
      </LayoutMain>
    )
  }
}

const mapState = ({ user }) => ({ users: user })

export default connect(mapState)(Users)
