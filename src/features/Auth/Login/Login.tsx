import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'redux/modules/auth/actions'
import { makeStyles } from 'styles'
import { Card, Hrule, Typography } from 'components'
import LoginForm from './LoginForm'

const useStyles = makeStyles({
  card: {
    width: 300,
  },
})

export interface Values {
  email: string
  password: string
}

function Login(): JSX.Element {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleOnSubmit = (data: Values) => {
    console.log(data)
    dispatch(login(data))
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h1" gutterBottom>
        Log in
      </Typography>
      <Hrule />
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default Login
