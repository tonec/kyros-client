import React from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'
import Action from './Action'

const useStylesActionBar = makeStyles({
  container: {
    display: 'flex',
  },
})

type Props = {
  children: React.ReactNode
  className: string
}

function ActionBar({ children, className }: Props): JSX.Element {
  const classes = useStylesActionBar()

  return <div className={cx(classes.container, className)}>{children}</div>
}

ActionBar.Action = Action

export default ActionBar
