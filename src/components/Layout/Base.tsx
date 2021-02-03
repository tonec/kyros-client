import React from 'react'
import { MaxWidth } from 'types'
import cx from 'clsx'
import Helmet from 'react-helmet'
import { makeStyles } from 'styles'
import { ConditionalWrap } from '../ui'
import Flash from '../Flash/FlashContainer'
import Header from '../Header/Header'

type StyleProps = {
  maxWidth: MaxWidth
}

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    height: '100%',
  },
  container: {
    maxWidth: ({ maxWidth }: StyleProps) => maxWidth,
  },
})

type Props = {
  children: React.ReactNode
  title: string
  maxWidth?: MaxWidth
  classNameWrap?: string
  header?: boolean
  container?: boolean
  classNameContainer?: string
}

function BaseLayout({
  children,
  title,
  maxWidth = 'lg',
  classNameWrap,
  header = false,
  container = false,
  classNameContainer,
}: Props): JSX.Element {
  const classes = useStyles({ maxWidth })

  return (
    <div className={cx(classes.wrap, classNameWrap)}>
      <Helmet title={title} />
      {header && <Header />}
      <ConditionalWrap
        condition={container}
        wrap={child => <div className={cx(classes.container, classNameContainer)}>{child}</div>}
      >
        {children}
      </ConditionalWrap>
      <Flash />
    </div>
  )
}

export default BaseLayout
