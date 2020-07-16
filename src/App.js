import React, { useState, useEffect } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { usePrevious } from 'hooks'
import { Grommet, defaultProps } from 'grommet'
import theme from 'theme'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'

console.log('defaultProps', defaultProps)

const App = ({ location, route }) => {
  const [ready, setReady] = useState(false)

  const prevPathname = usePrevious(location.pathname)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    if (location.pathname !== prevPathname) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <div className="app" style={{ visibility: ready ? 'visible' : 'hidden', height: '100%' }}>
      <Grommet theme={theme} style={{ height: '100%' }}>
        {renderRoutes(route.routes)}
      </Grommet>
    </div>
  )
}

App.propTypes = {
  location: object.isRequired,
  route: object.isRequired
}

export default App
