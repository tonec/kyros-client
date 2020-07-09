import React from 'react'
import logo from './logo.svg'

const Logo = () => {
  return (
    <div>
      <span style={{ backgroundImage: `url(${logo})`, display: 'block', width: 200, height: 400 }} />
    </div>
  )
}

export default Logo
