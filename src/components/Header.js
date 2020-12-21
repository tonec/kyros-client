import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppBar, Heading } from 'components'

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      padding: 10px;

      a {
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
`

function Header() {
  return (
    <AppBar>
      <Nav>
        <Heading level={1} size="xsmall">
          <p>Sleep SSR</p>
        </Heading>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">About</Link>
          </li>
        </ul>
      </Nav>
    </AppBar>
  )
}

export default Header
