import React from 'react'
import { childrenType } from 'types'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { hasUploadPermissions } from '../utils/checkPermissions'
import { useGlobalStore } from '../context/GlobalStore'

const PrivateRoute = ({ children, ...rest }) => {
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
  children: childrenType.isRequired,
}

export default PrivateRoute
