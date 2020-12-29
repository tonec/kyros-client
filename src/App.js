import { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { userType } from 'types'
import { compose } from 'redux'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { setIsFirstLoad } from 'redux/modules/app/actions'
import { getAuthUser } from 'redux/modules/auth/selectors'
import { setTheme, withTheme } from 'styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'
import './assets/stylesheets/nprogress.css'

class App extends Component {
  constructor(props) {
    super(props)

    setTheme(props.theme)

    this.state = {
      prevProps: props,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { history, location } = nextProps
    const { prevProps } = prevState

    // On login or else on logout
    if (!prevProps.user && nextProps.user) {
      const redirect = get(location, 'state.from')
      history.push(redirect || '/home')
    } else if (prevProps.user && !nextProps.user) {
      history.push('/login')
    }

    return {
      prevProps: nextProps,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props

    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    dispatch(setIsFirstLoad())
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { route } = this.props

    return renderRoutes(route.routes)
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
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

export default compose(withTheme, connect(mapState))(App)
