/* eslint-disable react/prop-types */
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createStructuredSelector } from 'reselect'
import hoistStatics from 'hoist-non-react-statics'
import { getAuthUser } from 'redux/modules/auth/selectors'
import { User } from 'types'
import { RootState } from 'redux/rootReducer'

type Props = {
  user: User
}

function AuthRedirect(DecoratedComponent: React.ComponentType) {
  const Wrapper = ({ user }: Props) => {
    if (!user) {
      return <DecoratedComponent />
    }

    return <Redirect to="/clients" />
  }

  return hoistStatics(Wrapper, DecoratedComponent)
}

const mapState = createStructuredSelector<RootState, Props>({
  user: getAuthUser,
})

const ComposedAuthRedirect = compose(connect(mapState), AuthRedirect)

export default ComposedAuthRedirect
