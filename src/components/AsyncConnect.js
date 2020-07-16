import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route } from 'react-router'
import { trigger } from 'redial'
import asyncMatchRoutes from 'utils/asyncMatchRoutes'

const AsyncConnect = ({ history, location, routes, store, children }) => {
  useEffect(() => {
    async function triggerFetch() {
      const { components, match, params } = await asyncMatchRoutes(
        routes,
        location.pathname,
      )

      const locals = {
        history,
        store,
        match,
        params,
      }

      await trigger('fetch', components, locals)

      if (__CLIENT__) {
        await trigger('defer', components, locals)
      }
    }
    triggerFetch()
  }, [location.pathname])

  return <Route location={location} render={() => children} />
}

AsyncConnect.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  routes: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired,
}

export default withRouter(AsyncConnect)
