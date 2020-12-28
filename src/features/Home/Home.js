import React from 'react'
import { connect } from 'react-redux'
import { appLoaded } from 'redux/modules/app/actions'
import { makeStyles } from 'styles'
import { Button } from 'components/ui'

const useStyles = makeStyles({
  container: {
    color: 'red',
  },
  button: {
    color: 'red',
  },
  button1: {
    color: 'blue',
  },
  button2: {
    color: 'pink',
  },
})

const Home = ({ dispatch }) => {
  const classes = useStyles()

  const handleClick = () => {
    dispatch(appLoaded())
  }

  return (
    <div className={classes.container}>
      <Button className={classes.button}>Click me</Button>
      <Button className={classes.button1}>Click me</Button>
      <Button className={classes.button2}>Click me</Button>
    </div>
  )
}

const mapState = () => ({})

export default connect(mapState)(Home)
