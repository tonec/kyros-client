import { useEffect } from 'react'
import PropTypes from 'prop-types'
// import get from 'lodash/get'
import { userType } from 'types'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { usePrevious } from 'hooks'
import { setAppLoaded } from 'redux/modules/app/actions'
import { getAuthUser } from 'redux/modules/auth/selectors'
import { useTheme, setTheme } from 'styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'

function App({ dispatch, location, route, user }) {
  const history = useHistory()
  const prevPathname = usePrevious(location.pathname)
  const prevUser = usePrevious(user)

  // Adds the theme object to the theme helpers
  setTheme(useTheme())

  // Remove server rendered styles and set app loaded
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    dispatch(setAppLoaded())
  }, [dispatch])

  // Handle redirect for log in & log out
  useEffect(() => {
    // if (!prevUser && user) {
    //   if (get(location, 'state.from')) {
    //     history.push(location.state.from)
    //   } else {
    //     history.push('/users')
    //   }
    // } else if (prevUser && !user) {
    //   history.push('/login')
    // }
  }, [history, location, user, prevUser])

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
