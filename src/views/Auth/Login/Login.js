import React from 'react'
import { Card, Typography } from 'components/ui'
import { makeStyles } from 'styles'
import LoginForm from './LoginForm'

const useStyles = makeStyles({
  card: {
    width: 300,
  },
})

function Login() {
  const classes = useStyles()

  const handleOnSubmit = () => {
    console.log('submit')
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h1">Log in</Typography>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default Login
