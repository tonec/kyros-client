import React from 'react'
import PropTypes from 'prop-types'
import AssessmentIcon from '@material-ui/icons/Assessment'
import DateRangeIcon from '@material-ui/icons/DateRange'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'

function Icon({ variant, className }) {
  switch (variant) {
    case 'delete':
      return <DeleteIcon className={className} />

    case 'edit':
      return <EditIcon className={className} />

    case 'home':
      return <HomeIcon className={className} />

    case 'logout':
      return <ExitToAppIcon className={className} />

    case 'report':
      return <AssessmentIcon className={className} />

    case 'schedule':
      return <DateRangeIcon className={className} />

    case 'team':
      return <PeopleIcon className={className} />

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
