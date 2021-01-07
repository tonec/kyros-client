import React from 'react'
import { makeStyles } from 'styles'
import Divider from './Divider'

const useStyles = makeStyles(theme => ({
  hrule: {
    margin: theme.spacing(2, 0),
  },
}))

function Hrule() {
  const classes = useStyles()
  return (
    <Divider component="hr" variant="fullWidth" className={classes.hrule} />
  )
}

export default Hrule
