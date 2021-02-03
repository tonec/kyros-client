import React, { useEffect } from 'react'
import { Status } from 'types'
import { makeStyles, color } from 'styles'
import { StatusIcon, Typography } from '../ui'

type UseStylesProps = {
  status: string
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginLeft: '-50%',
    backgroundColor: '#fff',
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: ({ status }: UseStylesProps) => color(status),
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
      color: ({ status }: UseStylesProps) => color(status),
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

type Props = {
  status: Status
  message: string
  dismissable: boolean
  timeout: number | null
  handleDismiss: () => void
}

function Flash({ status, message, dismissable, timeout, handleDismiss }: Props): JSX.Element {
  const classes = useStyles({ status })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

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
          <button type="button" data-testid="button-dismiss" onClick={handleDismiss}>
            <Typography variant="body2">Dismiss</Typography>
          </button>
        </div>
      )}
    </div>
  )
}

export default Flash
