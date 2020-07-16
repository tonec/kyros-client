import React from 'react'
import { Card, Heading } from 'components'
import LoginForm from './LoginForm'

function LoginFormContainer() {
  const handleOnSubmit = () => {
    console.log('submit')
  }

  return (
    <Card>
      <Heading level={1} size="xsmall">
        Log in
      </Heading>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </Card>
  )
}

export default LoginFormContainer
