import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { statusTypes } from 'types'
import { makeStyles, color } from 'styles'
import { StatusIcon, Typography } from '../ui'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginLeft: '-50%',
    backgroundColor: '#fff',
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: ({ status }) => color(status),
    boxShadow: theme.shadows[1],
  },

  message: {
    height: '100%',
    padding: theme.spacing(2, 4, 2, 6),
    flex: 2,

    '& svg': {
      position: 'absolute',
      top: '50%',
      left: theme.spacing(2),
      transform: 'translateY(-50%)',
      color: ({ status }) => color(status),
    },
  },

  dismiss: {
    flex: 1,
    textAlign: 'center',
    borderLeft: `1px solid ${theme.palette.grey[100]}`,

    '& button': {
      display: 'block',
      width: '100%',
      height: '100%',
      border: 0,
      cursor: 'pointer',
    },
  },
}))

function Flash({ status, message, dismissable, timeout, handleDismiss }) {
  const classes = useStyles({ status })

  useEffect(() => {
    let timer
    if (timeout) {
      timer = setTimeout(handleDismiss, timeout)
    }
    return () => clearTimeout(timer)
  }, [timeout, handleDismiss])

  return (
    <div className={classes.root} data-testid="flash">
      <div className={classes.message}>
        <StatusIcon status={status} />
        <Typography variant="body2">{message}</Typography>
      </div>

      {dismissable && (
        <div className={classes.dismiss}>
          <button
            type="button"
            data-testid="button-dismiss"
            onClick={handleDismiss}
          >
            <Typography variant="body2">Dismiss</Typography>
          </button>
        </div>
      )}
    </div>
  )
}

Flash.propTypes = {
  status: statusTypes,
  message: PropTypes.string,
  dismissable: PropTypes.bool,
  timeout: PropTypes.number,
  handleDismiss: PropTypes.func.isRequired,
}

Flash.defaultProps = {
  status: 'error',
  message: '',
  dismissable: false,
  timeout: null,
}

export default Flash
