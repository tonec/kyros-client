import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { logout } from 'redux/modules/auth/actions'
import { makeStyles } from 'styles'
import { Logo } from '../ui'
import Navigation from './Navigation'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: 0,
    flexDirection: 'column',
    height: '100vh',
    width: '56px',
    background: 'linear-gradient(to right, #07181f 0%, #113542 100%)',
  },
  logo: {
    margin: '8px 4px',
  },
})

export default function Header(): JSX.Element {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

  const classes = useStyles()

  const handleLogout = () => {
    history.push('/login')
    dispatch(logout())
  }

  return (
    <div className={classes.header} data-testid="header">
      <Link to="/clients">
        <Logo size={48} className={classes.logo} />
      </Link>

      {pathname !== '/login' && <Navigation handleLogout={handleLogout} />}
    </div>
  )
}
