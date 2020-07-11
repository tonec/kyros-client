import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Heading } from 'components'
import { Nav } from './style'

const Header = () => (
  <AppBar>
    <Nav>
      <Heading level={1} size="xsmall">
        Sleep SSR
      </Heading>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">About</Link></li>
      </ul>
    </Nav>
  </AppBar>
)

export default Header
