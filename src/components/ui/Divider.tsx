import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'
import BaseDivider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}))

type Props = ComponentPropsWithoutRef<typeof BaseDivider> & {
  gutterBottom?: boolean
}

function Divider({ variant, gutterBottom = false, className }: Props): JSX.Element {
  const classes = useStyles({ gutterBottom })

  return <BaseDivider variant={variant} className={cx(classes.root, className)} />
}

export default Divider
