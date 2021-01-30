import React, { ComponentPropsWithoutRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import BaseDivider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}))

type Props = ComponentPropsWithoutRef<typeof BaseDivider> & {
  gutterBottom: boolean
}

function Divider({ variant, gutterBottom, className }: Props): JSX.Element {
  const classes = useStyles({ gutterBottom })

  return (
    <BaseDivider variant={variant} className={cx(classes.root, className)} />
  )
}

Divider.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
  className: PropTypes.string,
}

Divider.defaultProps = {
  variant: 'fullWidth',
  gutterBottom: false,
  className: null,
}

export default Divider
