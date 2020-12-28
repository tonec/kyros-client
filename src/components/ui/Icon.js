import React from 'react'
import PropTypes from 'prop-types'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Icon({ variant, className }) {
  switch (variant) {
    case 'logout':
      return <ExitToAppIcon className={className} />
    default:
      return null
  }
}

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: null,
}

export default Icon
