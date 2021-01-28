import { Component } from 'react'
import get from 'lodash/get'
import { RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { connect } from 'react-redux'
import { RootState } from './redux/rootReducer'
import { User } from './types'
import { setIsFirstLoad } from './redux/modules/app/actions'
import { getAuthUser } from './redux/modules/auth/selectors'
import { setTheme, withTheme } from './styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'
import './assets/stylesheets/nprogress.css'

interface StateProps {
  user: User
}

interface DispatchProps {
  setIsFirstLoad: () => void
}

interface AppProps {
  history: RouteComponentProps['history']
  location: RouteComponentProps['location']
  route: RouteConfigComponentProps['route']
  theme: Record<string, unknown>
  user: User
}

type Props = StateProps & DispatchProps & AppProps

interface AppState {
  prevProps: AppProps
}

class App extends Component<Props> {
  constructor(props: Props) {
    super(props)

    setTheme(props.theme)

    this.state = {
      prevProps: props,
    }
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: AppState) {
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
    const { setIsFirstLoad } = this.props

    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    setIsFirstLoad()
  }

  componentDidUpdate(prevProps: Props) {
    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { route } = this.props

    if (!route) return null

    return renderRoutes(route.routes)
  }
}

const mapState = createStructuredSelector<RootState, StateProps>({
  user: getAuthUser,
})

const mapDispatch = {
  setIsFirstLoad,
}

export default compose(withTheme, connect(mapState, mapDispatch))(App)
