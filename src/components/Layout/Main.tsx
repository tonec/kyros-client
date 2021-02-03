import React from 'react'
import { MaxWidth } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import Base from './Base'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    marginLeft: 56,
  },
})

type Props = {
  children: React.ReactNode
  title: string
  maxWidth: MaxWidth
  className: string
}

function Main({ children, title, maxWidth, className }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <Base
      title={title}
      maxWidth={maxWidth}
      classNameWrap={cx(classes.wrap, className)}
      classNameContainer={classes.container}
      container
      header
    >
      {children}
    </Base>
  )
}

export default Main
