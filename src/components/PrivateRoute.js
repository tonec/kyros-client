/* eslint-disable react/prop-types */
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter, Redirect } from 'react-router'
import hoistStatics from 'hoist-non-react-statics'
import { getAuthUser } from 'redux/modules/auth/selectors'

function PrivateRoute(DecoratedComponent) {
  const Wrapper = ({ location, user }) => {
    if (user) {
      return <DecoratedComponent />
    }

    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: `${location.pathname}${location.search}` },
        }}
      />
    )
  }

  return hoistStatics(Wrapper, DecoratedComponent)
}

const mapState = createStructuredSelector({
  user: getAuthUser,
})

const ComposedPrivateRoute = compose(
  connect(mapState),
  withRouter,
  PrivateRoute,
)

export default ComposedPrivateRoute
