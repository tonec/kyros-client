import React, { useCallback } from 'react'
import { Status } from 'types'
import { connect } from 'react-redux'
import { hideFlash } from 'redux/modules/flash/actions'
import { makeStyles } from 'styles'
import Flash from './Flash'
import { RootState } from 'redux/rootReducer'

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

type Props = {
  visible: boolean
  status: Status
  message: string
  dismissable: boolean
  timeout: number | null
  hideFlash: () => void
}

function FlashContainer({
  visible,
  status,
  message,
  dismissable,
  timeout,
  hideFlash,
}: Props): JSX.Element {
  const classes = useStyles()

  const handleDismiss = useCallback(() => {
    hideFlash()
  }, [])

  return (
    <div className={classes.container}>
      {visible && (
        <Flash
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

const mapState = ({ flash }: RootState) => ({
  ...flash,
})

const mapDispatch = {
  hideFlash,
}

export default connect(mapState, mapDispatch)(FlashContainer)
