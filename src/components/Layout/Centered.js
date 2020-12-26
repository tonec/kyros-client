import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
import { makeStyles } from 'styles'
import { Flash } from 'components'
import Base from './Base'

const useStyles = makeStyles({
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})

function Centered({ children, title, maxWidth, container }) {
  const classes = useStyles()

  return (
    <Base
      title={title}
      maxWidth={maxWidth}
      classNameWrap={classes.wrap}
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
}

Centered.defaultProps = {
  maxWidth: false,
  container: false,
}

export default Centered
