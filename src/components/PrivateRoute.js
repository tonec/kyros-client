/* eslint-disable react/prop-types */
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getAuthUser } from 'redux/modules/auth/selectors'

function PrivateRoute(DecoratedComponent) {
  return ({ staticContext, location, history, user }) => {
    if (user) {
      return <DecoratedComponent />
    }

    console.log('history', history)

    staticContext.redirect = '/login'
    staticContext.from = location.pathname + location.search

    return null
  }
}

// function PrivateRoute({ user, location, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   )
// }

const mapState = state => ({
  user: getAuthUser(state),
})

const ComposedPrivateRoute = compose(
  connect(mapState),
  withRouter,
  PrivateRoute,
)

export default ComposedPrivateRoute
