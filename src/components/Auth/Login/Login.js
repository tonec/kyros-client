import React from 'react'
import { Card, Typography } from 'components'
import { useDispatch } from 'react-redux'
import { makeStyles } from 'styles'
import { login } from 'redux/modules/auth/actions'
import LoginForm from './LoginForm'

const useStyles = makeStyles({
  card: {
    width: 300,
  },
})

function Login() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleOnSubmit = data => {
    dispatch(login(data))
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h1">Log in</Typography>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default Login
