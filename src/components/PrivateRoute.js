/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { hasUploadPermissions } from '../utils/checkPermissions'
import { useGlobalStore } from '../context/GlobalStore'

function PrivateRoute({ children, ...rest }) {
  const location = useLocation()
  const {
    auth: { user },
  } = useGlobalStore()

  return (
    <Route
      {...rest}
      render={() =>
        hasUploadPermissions(user) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
}

export default PrivateRoute
