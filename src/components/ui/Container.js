import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseContainer from '@material-ui/core/Container'

function Container({
  children,
  classes,
  className,
  component,
  disableGutters,
  fixed,
  maxWidth,
}) {
  return (
    <BaseContainer
      classes={classes}
      className={className}
      component={component}
      disableGutters={disableGutters}
      fixed={fixed}
      maxWidth={maxWidth}
      data-testid="container"
    >
      {children}
    </BaseContainer>
  )
}

Container.propTypes = {
  children: childrenType.isRequired,
  classes: PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disableGutters: PropTypes.bool,
  fixed: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
}

Container.defaultProps = {
  classes: null,
  className: null,
  component: 'div',
  disableGutters: false,
  fixed: false,
  maxWidth: null,
}

export default Container
