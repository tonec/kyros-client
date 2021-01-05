/* eslint-disable no-unreachable */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, useParams } from 'react-router'
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

function Navigation({ handleLogout }) {
  const classes = useStyles()
  const { clientId } = useParams()

  return (
    <ul className={classes.menu} data-testid="header-menu">
      <Switch>
        <Route path="/client/:id">
          <NavigationItem
            label="Schedule"
            path={`/client/${clientId}/schedule`}
            icon={<Icon variant="schedule" />}
          />
          <NavigationItem
            label="People"
            path={`/client/${clientId}/people`}
            icon={<Icon variant="people" />}
          />
          <NavigationItem
            label="Report"
            path={`/client/${clientId}/reports`}
            icon={<Icon variant="report" />}
          />
          <NavigationItem
            label="Log out"
            icon={<Icon variant="logout" />}
            handleClick={handleLogout}
          />
        </Route>
      </Switch>
    </ul>
  )
}

Navigation.propTypes = {
  handleLogout: PropTypes.func,
}

Navigation.defaultProps = {
  handleLogout: null,
}

export default Navigation
