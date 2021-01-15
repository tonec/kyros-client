import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
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
    marginLeft: 32,
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
      header
    >
      {children}
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
