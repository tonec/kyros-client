import React from 'react'
import { LayoutMain, Button } from 'components'

const handleClick = () => {
  console.log('clicked')
}

const Home = () => (
  <LayoutMain title="Home">
    <Button
      primary
      label="Click"
      onClick={handleClick}
    />
  </LayoutMain>
)

export default Home
