import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'redux/modules/auth/actions'
import { makeStyles } from 'styles'
import { Card, Typography } from 'components'
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
      <Typography variant="h1" gutterBottom>
        Log in
      </Typography>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default Login
