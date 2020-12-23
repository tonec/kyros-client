import React from 'react'
import { Card, Typography } from 'components/ui'
import LoginForm from './LoginForm'

function LoginFormContainer() {
  const handleOnSubmit = () => {
    console.log('submit')
  }

  return (
    <Card>
      <Typography variant="h1">Log in</Typography>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default LoginFormContainer
