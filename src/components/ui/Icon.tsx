import React from 'react'
import AssessmentIcon from '@material-ui/icons/Assessment'
import DateRangeIcon from '@material-ui/icons/DateRange'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PeopleIcon from '@material-ui/icons/People'

type Props = {
  variant: string
  className?: string
  size?: 'default' | 'small' | 'large'
}

function Icon({
  variant,
  className,
  size = 'default',
}: Props): JSX.Element | null {
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

export default Icon
