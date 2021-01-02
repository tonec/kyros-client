/* eslint-disable no-unreachable */
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import { Icon } from '../ui'
import NavigationItem from './NavigationItem'

const useStyles = makeStyles({
  menu: {
    display: 'block',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
})

function Navigation({ id, handleLogout }) {
  const classes = useStyles({ id })

  return (
    <ul className={classes.menu} data-testid="header-menu">
      <NavigationItem
        label="Log out"
        path="/home"
        icon={<Icon variant="home" size={32} />}
      />
      <NavigationItem
        label="Schedule"
        path="/schedule"
        icon={<Icon variant="schedule" size={32} />}
      />
      <NavigationItem
        label="Team"
        path="/team"
        icon={<Icon variant="team" size={32} />}
      />
      <NavigationItem
        label="Report"
        path="/reports"
        icon={<Icon variant="report" size={32} />}
      />
      <NavigationItem
        label="Log out"
        icon={<Icon variant="logout" size={32} />}
        handleClick={handleLogout}
      />
    </ul>
  )
}

Navigation.propTypes = {
  id: PropTypes.string,
  handleLogout: PropTypes.func,
}

Navigation.defaultProps = {
  id: null,
  handleLogout: null,
}

export default Navigation
