/* eslint-disable no-unreachable */
import React from 'react'
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

type Props = {
  handleLogout: () => void
}

type Params = {
  clientId: string
}

function Navigation({ handleLogout }: Props): JSX.Element {
  const classes = useStyles()
  const { clientId } = useParams<Params>()

  return (
    <ul className={classes.menu} data-testid="header-menu">
      <Switch>
        <Route path="/client/:id">
          <NavigationItem
            path={`/client/${clientId}/schedule`}
            icon={<Icon variant="schedule" />}
          />
          <NavigationItem path={`/client/${clientId}/people`} icon={<Icon variant="people" />} />
          <NavigationItem path={`/client/${clientId}/reports`} icon={<Icon variant="report" />} />
          <NavigationItem icon={<Icon variant="logout" />} handleClick={handleLogout} />
        </Route>
      </Switch>
    </ul>
  )
}

export default Navigation
