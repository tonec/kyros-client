import { useEffect } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { usePrevious } from 'hooks'
import { useTheme, setTheme } from 'styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'

const App = ({ location, route }) => {
  const prevPathname = usePrevious(location.pathname)

  setTheme(useTheme())

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
  }, [location.pathname, prevPathname])

  return renderRoutes(route.routes)
}

App.propTypes = {
  location: object.isRequired,
  route: object.isRequired,
}

export default App
