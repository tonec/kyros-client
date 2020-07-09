import React, { Component } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Grommet, defaultProps } from 'grommet'
import theme from 'theme'

console.log('defaultProps', defaultProps)

class App extends Component {
  static propTypes = {
    location: object.isRequired,
    route: object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    this.setState({ ready: true })
  }

  componentDidUpdate(prevProps) {
    const { pathname: prevPathname } = prevProps.location
    const { location: { pathname } } = this.props

    if (pathname !== prevPathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { route } = this.props
    const { ready } = this.state

    return (
      <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <Grommet theme={theme}>
          {renderRoutes(route.routes)}
        </Grommet>
      </div>
    )
  }
}

export default App
