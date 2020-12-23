import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { makeStyles } from '@material-ui/core/styles'
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
    </Base>
  )
}

Centered.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string.isRequired,
  container: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
}

Centered.defaultProps = {
  maxWidth: false,
  container: false,
}

export default Centered
