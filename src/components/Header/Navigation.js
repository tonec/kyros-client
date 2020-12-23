/* eslint-disable no-unreachable */
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AnalyticsIcon, MapIcon } from '../ui/icons'
import NavigationItem from './NavigationItem'

const useStyles = makeStyles({
  menu: {
    display: 'block',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
})

function Navigation({ id }) {
  const classes = useStyles({ id })

  const { pathname } = useLocation()

  return (
    <ul className={classes.menu} data-testid="header-menu">
      <NavigationItem
        label="Map"
        path="/"
        icon={<MapIcon size={32} />}
        active={pathname === '/'}
      />
      <NavigationItem
        label="Analytics"
        path="/users"
        icon={<AnalyticsIcon size={32} />}
        active={pathname === '/users'}
      />
    </ul>
  )
}

Navigation.propTypes = {
  id: PropTypes.string,
}

Navigation.defaultProps = {
  id: null,
}

export default Navigation
