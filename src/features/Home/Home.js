import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from 'styles'
import { Button, Main } from 'components'

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

const Home = () => {
  const classes = useStyles()

  return (
    <Main title="Home">
      <Button className={classes.button}>Click me</Button>
      <Button className={classes.button1}>Click me</Button>
      <Button className={classes.button2}>Click me</Button>
    </Main>
  )
}

const mapState = () => ({})

export default connect(mapState)(Home)
