import React, { ComponentPropsWithoutRef } from 'react'
import { makeStyles } from 'styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

type Props = ComponentPropsWithoutRef<typeof CircularProgress>

function Loader({ color }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root} data-testid="loader">
      <CircularProgress color={color} />
    </div>
  )
}

export default Loader
