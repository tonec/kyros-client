import React from 'react'
import { childrenType } from 'types'
import { makeStyles } from 'styles'
import BaseFormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

function FormGroup({ children }) {
  const classes = useStyles()

  return <BaseFormGroup className={classes.control}>{children}</BaseFormGroup>
}

FormGroup.propTypes = {
  children: childrenType.isRequired,
}

export default FormGroup
