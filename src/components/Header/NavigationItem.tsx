import React, { MouseEvent, KeyboardEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from 'styles'
import { Anchor } from '../ui'

interface StyleProps {
  active: boolean
  disabled: boolean
}

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    color: ({ active, disabled }: StyleProps) => {
      if (disabled) {
        return '#2b4f5c'
      }
      return active ? '#07181f' : theme.palette.common.white
    },

    backgroundColor: ({ active }: StyleProps) =>
      active ? theme.palette.common.white : 'transparent',

    '& a': {
      display: 'block',
      textAlign: 'center',
      padding: '6px 0',
      outline: 'none',
      cursor: ({ disabled }: StyleProps) => (disabled ? 'initial' : 'pointer'),
    },
  },
}))

interface Props {
  path: string
  icon: React.ReactElement
  disabled: boolean
  handleClick: (event: MouseEvent | KeyboardEvent) => void
}

function NavigationItem({ path, icon, disabled, handleClick }: Props): JSX.Element {
  const history = useHistory()

  const { pathname } = history.location
  const active = pathname === path

  const classes = useStyles({ active, disabled })

  const onClick = (event: MouseEvent | KeyboardEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (disabled) return

    if (typeof handleClick === 'function') {
      handleClick(event)
      return
    }

    if (path && path !== history.location.pathname) {
      history.push(path)
    }
  }

  return (
    <li className={classes.item}>
      <Anchor onClick={onClick}>{icon}</Anchor>
    </li>
  )
}

export default NavigationItem
