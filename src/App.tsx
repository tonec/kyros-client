import { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { connect } from 'react-redux'
import { RootState } from './redux/rootReducer'
import { User } from './types'
import { setIsFirstLoad } from './redux/modules/app/actions'
import { getAuthUser } from './redux/modules/auth/selectors'
import { setTheme, Theme, withTheme } from './styles'

import './assets/stylesheets/global.css'
import './assets/stylesheets/reset.css'
import './assets/stylesheets/nprogress.css'

type MappedState = {
  user: User
}

type Props = MappedState &
  RouteComponentProps &
  RouteConfigComponentProps & {
    history: ['history']
    theme: Theme
    setIsFirstLoad: () => void
  }

type State = {
  prevProps: Props
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    setTheme(props.theme)

    this.state = {
      prevProps: props,
    }
  }

  static getDerivedStateFromProps(nextProps: Props) {
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

const mapState = createStructuredSelector<RootState, MappedState>({
  user: getAuthUser,
})

const mapDispatch = {
  setIsFirstLoad,
}

export default compose(withTheme, connect(mapState, mapDispatch))(App)
