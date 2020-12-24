import React from 'react'
import { makeStyles } from 'styles'
import Divider from './Divider'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}))

function Hrule() {
  const classes = useStyles()
  return <Divider component="hr" variant="fullWidth" classes={classes} />
}

export default Hrule
