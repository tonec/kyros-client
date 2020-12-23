import React from 'react'
import { useLocation, useHistory, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { clearAuthData } from '../../utils/sessionStorage'
import { Logo } from '../ui'
import Navigation from './Navigation'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    position: 'fixed',
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

export default function Header() {
  const { pathname } = useLocation()
  const { id } = useParams()
  const history = useHistory()

  const classes = useStyles()

  const handleLogout = () => {
    history.push('/login')
    clearAuthData()
  }

  return (
    <div className={classes.header} data-testid="header">
      <Logo size={48} className={classes.logo} />

      {pathname !== '/login' && (
        <Navigation id={id} handleLogout={handleLogout} />
      )}
    </div>
  )
}