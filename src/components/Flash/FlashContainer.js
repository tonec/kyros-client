import React, { useCallback } from 'react'
import { makeStyles } from 'styles'
import * as actions from '../../context/actions'
import { useGlobalStore } from '../../context/GlobalStore'
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

function FlashContainer() {
  const {
    dispatch,
    flash: { visible, status, message, dismissable, timeout },
  } = useGlobalStore()

  const classes = useStyles()

  const hideFlash = useCallback(() => {
    dispatch({ type: actions.HIDE_FLASH })
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
          hideFlash={hideFlash}
        />
      )}
    </div>
  )
}

export default FlashContainer
