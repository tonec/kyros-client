/* eslint-disable react/prop-types */
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter, Redirect, RouteComponentProps } from 'react-router'
import hoistStatics from 'hoist-non-react-statics'
import { getAuthUser } from 'redux/modules/auth/selectors'
import { User } from 'types'
import { RootState } from 'redux/rootReducer'

type MappedState = {
  user: User
}

type Props = RouteComponentProps & MappedState

function PrivateRoute(DecoratedComponent: React.ComponentType) {
  const Wrapper = ({ location, user }: Props) => {
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

const mapState = createStructuredSelector<RootState, MappedState>({
  user: getAuthUser,
})

const ComposedPrivateRoute = compose(
  connect(mapState),
  withRouter,
  PrivateRoute,
)

export default ComposedPrivateRoute
