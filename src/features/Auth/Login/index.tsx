import React, { ReactNode } from 'react'
import { Centered } from '../../../components'
import Login from './Login'

function LoginView(): ReactNode {
  return (
    <Centered title="Log in">
      <Login />
    </Centered>
  )
}

export default LoginView
