import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Action from './Action'

const useStylesActionBar = makeStyles({
  container: {
    display: 'flex',
  },
})

function ActionBar({ children, className }) {
  const classes = useStylesActionBar()

  return <div className={cx(classes.container, className)}>{children}</div>
}

ActionBar.propTypes = {
  children: childrenType.isRequired,
  className: PropTypes.string,
}

ActionBar.defaultProps = {
  className: null,
}

ActionBar.Action = Action

export default ActionBar
