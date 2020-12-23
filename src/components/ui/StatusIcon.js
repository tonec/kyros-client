import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const StatusIcon = ({ status, className }) => {
  switch (status) {
    case 'info':
      return <InfoIcon data-testid="icon-info" className={className} />

    case 'warning':
      return <WarningIcon data-testid="icon-warning" className={className} />

    case 'error':
      return <ErrorIcon data-testid="icon-error" className={className} />

    case 'success':
      return (
        <CheckCircleIcon data-testid="icon-success" className={className} />
      )

    default:
      return null
  }
}

StatusIcon.propTypes = {
  status: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  className: PropTypes.string,
}

StatusIcon.defaultProps = {
  className: null,
}

export default StatusIcon
