import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { statusTypes } from 'types'
import { connect } from 'react-redux'
import { hideFlash } from 'redux/modules/flash/actions'
import { makeStyles } from 'styles'
import Flash from './Flash'

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    top: 80,
    left: '50%',
    zIndex: 9999,
    width: '100%',
    maxWidth: 420,
    height: 0,
  },
})

function FlashContainer({
  visible,
  status,
  message,
  dismissable,
  timeout,
  dispatch,
}) {
  const classes = useStyles()

  const handleDismiss = useCallback(() => {
    dispatch(hideFlash())
  }, [dispatch])

  return (
    <div className={classes.container}>
      {visible && (
        <Flash
          visible={visible}
          status={status}
          message={message}
          dismissable={dismissable}
          timeout={timeout}
          handleDismiss={handleDismiss}
        />
      )}
    </div>
  )
}

FlashContainer.propTypes = {
  visible: PropTypes.bool,
  status: statusTypes,
  message: PropTypes.string,
  dismissable: PropTypes.bool,
  timeout: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
}

FlashContainer.defaultProps = {
  visible: false,
  status: 'success',
  message: null,
  dismissable: true,
  timeout: null,
}

const mapState = ({ flash }) => ({
  ...flash,
})

export default connect(mapState)(FlashContainer)
