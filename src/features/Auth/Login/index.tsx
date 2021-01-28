import React from 'react'
import { Centered } from '../../../components'
import Login from './Login'

function LoginView(): JSX.Element {
  return (
    <Centered title="Log in">
      <Login />
    </Centered>
  )
}

export default LoginView
