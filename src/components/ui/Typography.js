import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTypography from '@material-ui/core/Typography'

function Typography({
  children,
  align,
  color,
  display,
  gutterBottom,
  noWrap,
  paragraph,
  variant,
  component,
  className,
  testid,
}) {
  return (
    <BaseTypography
      align={align}
      color={color}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
      component={component}
      className={className}
      data-testid={testid}
    >
      {children}
    </BaseTypography>
  )
}

Typography.propTypes = {
  children: childrenType.isRequired,
  align: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.string,
  component: PropTypes.string,
  className: PropTypes.string,
  testid: PropTypes.string,
}

Typography.defaultProps = {
  align: 'inherit',
  color: 'initial',
  display: 'initial',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body1',
  component: null,
  className: '',
  testid: '',
}

export default Typography
