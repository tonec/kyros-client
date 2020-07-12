import React, { useEffect } from 'react'
import { node, objectOf, object, any, array } from 'prop-types'
import { withRouter, Route } from 'react-router'
import { trigger } from 'redial'
import asyncMatchRoutes from 'utils/asyncMatchRoutes'

const AsyncConnect = ({ history, location, routes, store, children }) => {
  useEffect(() => {
    async function triggerFetch() {
      const { components, match, params } = await asyncMatchRoutes(routes, location.pathname)

      const locals = {
        history,
        store,
        match,
        params
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
  children: node.isRequired,
  history: objectOf(any).isRequired,
  location: objectOf(any).isRequired,
  routes: array.isRequired,
  store: object.isRequired,
}

export default withRouter(AsyncConnect)
