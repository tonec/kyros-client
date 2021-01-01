import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import Base from './Base'
import Flash from '../Flash/FlashContainer'
import Header from '../Header/Header'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginLeft: 56,
  },
})

function Main({ children, title, maxWidth, className }) {
  const classes = useStyles()

  return (
    <Base
      title={title}
      maxWidth={maxWidth}
      classNameWrap={cx(classes.wrap, className)}
      classNameContainer={classes.container}
      container
    >
      <Header />
      {children}
      <Flash />
    </Base>
  )
}

Main.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string,
  maxWidth: maxWidthType,
  className: PropTypes.string,
}

Main.defaultProps = {
  title: null,
  maxWidth: false,
  className: null,
}

export default Main
