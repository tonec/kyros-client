import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter, Route, RouteComponentProps } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { RootState } from 'redux/rootReducer'
import { getIsFirstLoad } from 'redux/modules/app/selectors'

interface MappedState {
  isFirstLoad: boolean
}

type Props = RouteComponentProps &
  MappedState & {
    isFirstLoad: boolean
    trigger: (pathname: string) => Promise<void>
  }

interface State {
  needTrigger?: boolean
  location?: RouteComponentProps['location'] | null
  previousLocation?: RouteComponentProps['location'] | null
}

class AsyncTrigger extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      needTrigger: false,
      location: null,
      previousLocation: null,
    }
  }

  mounted = false

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { location } = prevState

    const {
      location: { pathname, search },
    } = nextProps

    const navigated = !location || pathname !== location.pathname

    const qsChange = !location || search !== location.search

    if (navigated) {
      return {
        needTrigger: true,
        location: nextProps.location,
        previousLocation: location || nextProps.location,
      }
    }

    if (qsChange) {
      return {
        needTrigger: false,
        location: nextProps.location,
        previousLocation: location || nextProps.location,
      }
    }

    return null
  }

  componentDidMount() {
    this.mounted = true

    this.trigger()
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { previousLocation } = this.state
    return nextState.previousLocation !== previousLocation
  }

  componentDidUpdate() {
    this.trigger()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  trigger = () => {
    const { trigger, location } = this.props
    const { needTrigger } = this.state

    if (needTrigger) {
      this.safeSetState({ needTrigger: false }, () => {
        trigger(location.pathname)
          .catch(err => console.log('Failure in RouterTrigger:', err))
          .then(() => {
            this.safeSetState({ previousLocation: null })
          })
      })
    }
  }

  safeSetState(nextState: State, callback?: () => void) {
    if (this.mounted) {
      this.setState(nextState, callback)
    }
  }

  render() {
    const { children, location } = this.props

    return <Route location={location} render={() => children} />
  }
}

const mapState = createStructuredSelector<RootState, MappedState>({
  isFirstLoad: getIsFirstLoad,
})

export default compose(connect(mapState), withRouter, hot)(AsyncTrigger)
