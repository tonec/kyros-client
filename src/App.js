import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { userType } from 'types'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { usePrevious } from 'hooks'
import { getAuthUser } from 'redux/modules/auth/selectors'
import { useTheme, setTheme } from 'styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'

const App = ({ location, route, user }) => {
  const history = useHistory()
  const prevPathname = usePrevious(location.pathname)
  const prevUser = usePrevious(user)

  // Adds the theme object to the theme helpers
  setTheme(useTheme())

  // Remove server rendered styles
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  // Handle redirect for log in & log out
  useEffect(() => {
    if (!prevUser && user) {
      if (location.query.redirect) {
        history.push(location.query.redirect)
      } else {
        history.push('/users')
      }
    } else if (prevUser && !user) {
      history.push('/login')
    }
  }, [history, location.query.redirect, user, prevUser])

  // Scroll to the top when navigating between pages
  useEffect(() => {
    if (location.pathname !== prevPathname) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, prevPathname])

  return renderRoutes(route.routes)
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  user: userType,
}

App.defaultProps = {
  user: null,
}

const mapState = state => {
  return {
    user: getAuthUser(state),
  }
}

export default connect(mapState)(App)
