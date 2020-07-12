import React from 'react'
import { connect } from 'react-redux'
import { appLoaded } from 'redux/modules/app/actions'
import { LayoutMain, Button } from 'components'

const Home = ({ dispatch }) => {
  const handleClick = () => {
    dispatch(appLoaded())
  }

  return (
    <LayoutMain title="Home">
      <Button
        primary
        label="Click"
        onClick={handleClick}
      />
    </LayoutMain>
  )
}

const mapState = () => ({})

export default connect(mapState)(Home)
