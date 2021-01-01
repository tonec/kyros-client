import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import Flash from '../Flash/FlashContainer'
import Base from './Base'

const useStyles = makeStyles({
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})

function Centered({ children, title, maxWidth, className, container }) {
  const classes = useStyles()

  return (
    <Base
      title={title}
      maxWidth={maxWidth}
      classNameWrap={cx(classes.wrap, className)}
      container={container}
    >
      {children}
      <Flash />
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
