import React from 'react'
import { MaxWidth } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import Base from './Base'

const useStyles = makeStyles({
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})

interface Props {
  children: React.ReactNode
  title: string
  maxWidth?: MaxWidth
  className?: string
  container?: boolean
}

function Centered({ children, title, maxWidth, className, container }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <Base
      title={title}
      maxWidth={maxWidth}
      classNameWrap={cx(classes.wrap, className)}
      container={container}
    >
      {children}
    </Base>
  )
}

export default Centered
