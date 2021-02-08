import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

interface Props {
  status: 'info' | 'warning' | 'error' | 'success'
  className?: string
}

const StatusIcon = ({ status, className }: Props): JSX.Element | null => {
  switch (status) {
    case 'info':
      return <InfoIcon data-testid="icon-info" className={className} />

    case 'warning':
      return <WarningIcon data-testid="icon-warning" className={className} />

    case 'error':
      return <ErrorIcon data-testid="icon-error" className={className} />

    case 'success':
      return <CheckCircleIcon data-testid="icon-success" className={className} />

    default:
      return null
  }
}

export default StatusIcon
