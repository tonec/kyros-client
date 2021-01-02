import React from 'react'
import PropTypes from 'prop-types'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DateRangeIcon from '@material-ui/icons/DateRange'
import PeopleIcon from '@material-ui/icons/People'
import AssessmentIcon from '@material-ui/icons/Assessment'
import HomeIcon from '@material-ui/icons/Home'

function Icon({ variant, className }) {
  switch (variant) {
    case 'home':
      return <HomeIcon className={className} />

    case 'schedule':
      return <DateRangeIcon className={className} />

    case 'team':
      return <PeopleIcon className={className} />

    case 'report':
      return <AssessmentIcon className={className} />

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
