import React from 'react'
import { makeStyles } from 'styles'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Typography from '../Typography'

const useStyles = makeStyles(theme => ({
  errorContainer: {
    position: 'absolute',
    color: theme.palette.error.main,

    '& > svg': {
      verticalAlign: 'middle',
      marginRight: 2,
      marginTop: -2,
      fontSize: 15,
    },
  },
}))

interface Props {
  error: string
}

function FormInputError({ error }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.errorContainer}>
      <ErrorOutlineIcon />
      <Typography variant="caption">{error}</Typography>
    </div>
  )
}

export default FormInputError
