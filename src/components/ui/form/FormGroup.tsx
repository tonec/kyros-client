import React, { ComponentPropsWithoutRef } from 'react'
import { makeStyles } from 'styles'
import BaseFormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

type Props = ComponentPropsWithoutRef<typeof BaseFormGroup>

function FormGroup({ children }: Props): JSX.Element {
  const classes = useStyles()

  return <BaseFormGroup className={classes.control}>{children}</BaseFormGroup>
}

export default FormGroup
