import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import { trigger } from 'redial'
import { usePrevious } from 'hooks'
import asyncMatchRoutes from 'helpers/asyncMatchRoutes'
import { getAppLoaded } from 'redux/modules/app/selectors'

function AsyncTrigger({
  history,
  location,
  routes,
  store,
  children,
  appLoaded,
}) {
  const prevPathname = usePrevious(location.pathname)

  useEffect(() => {
    const navigated = location.pathname !== prevPathname

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

    if (!appLoaded && navigated) {
      triggerFetch()
    }
  }, [history, location.pathname, prevPathname, routes, store, appLoaded])

  return <Route location={location} render={() => children} />
}

AsyncTrigger.propTypes = {
  children: childrenType.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  routes: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired,
  appLoaded: PropTypes.bool.isRequired,
}

const mapState = state => ({
  appLoaded: getAppLoaded(state),
})

export default compose(connect(mapState), withRouter)(AsyncTrigger)
