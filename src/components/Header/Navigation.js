/* eslint-disable no-unreachable */
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { makeStyles } from 'styles'
import { Icon } from 'components'
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

  const { pathname } = useLocation()

  return (
    <ul className={classes.menu} data-testid="header-menu">
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
