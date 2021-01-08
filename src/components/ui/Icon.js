import React from 'react'
import PropTypes from 'prop-types'
import AssessmentIcon from '@material-ui/icons/Assessment'
import DateRangeIcon from '@material-ui/icons/DateRange'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PeopleIcon from '@material-ui/icons/People'

function Icon({ variant, className, size }) {
  switch (variant) {
    case 'delete':
      return <DeleteIcon className={className} fontSize={size} />

    case 'edit':
      return <EditIcon className={className} fontSize={size} />

    case 'home':
      return <HomeIcon className={className} fontSize={size} />

    case 'logout':
      return <ExitToAppIcon className={className} fontSize={size} />

    case 'more':
      return <MoreHorizIcon className={className} fontSize={size} />

    case 'report':
      return <AssessmentIcon className={className} fontSize={size} />

    case 'schedule':
      return <DateRangeIcon className={className} fontSize={size} />

    case 'people':
      return <PeopleIcon className={className} fontSize={size} />

    default:
      return null
  }
}

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
}

Icon.defaultProps = {
  className: null,
  size: 'default',
}

export default Icon
