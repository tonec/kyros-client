import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter, Route } from 'react-router-dom'
import { getIsFirstLoad } from 'redux/modules/app/selectors'

class AsyncTrigger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      needTrigger: false,
      location: null,
      previousLocation: null,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { location } = prevState

    const {
      location: { pathname },
    } = nextProps

    const navigated = !location || pathname !== location.pathname

    if (navigated) {
      return {
        needTrigger: true,
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

  shouldComponentUpdate(nextProps, nextState) {
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
          // eslint-disable-next-line no-console
          .catch(err => console.log('Failure in RouterTrigger:', err))
          .then(() => {
            this.safeSetState({ previousLocation: null })
          })
      })
    }
  }

  safeSetState(nextState, callback) {
    if (this.mounted) {
      this.setState(nextState, callback)
    }
  }

  render() {
    const { children, location } = this.props
    const { previousLocation } = this.state

    return (
      <Route location={previousLocation || location} render={() => children} />
    )
  }
}

AsyncTrigger.propTypes = {
  children: childrenType.isRequired,
  location: PropTypes.object.isRequired,
  trigger: PropTypes.func.isRequired,
}

const mapState = createStructuredSelector({
  isFirstLoad: getIsFirstLoad,
})

export default compose(connect(mapState), withRouter)(AsyncTrigger)
