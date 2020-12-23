import { useEffect } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { usePrevious } from 'hooks'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'

const App = ({ location, route }) => {
  const prevPathname = usePrevious(location.pathname)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== prevPathname) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return renderRoutes(route.routes)
}

App.propTypes = {
  location: object.isRequired,
  route: object.isRequired,
}

export default App
