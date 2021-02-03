import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, MaxWidth, maxWidthType } from 'types'
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

type Props = {
  children: React.ReactNode
  title: string
  maxWidth: MaxWidth
  className: string
  container: boolean
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

Centered.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string.isRequired,
  container: PropTypes.bool,
  maxWidth: maxWidthType,
  className: PropTypes.string,
}

Centered.defaultProps = {
  maxWidth: false,
  container: false,
  className: null,
}

export default Centered
