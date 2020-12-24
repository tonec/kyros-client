import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import cx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from 'styles'
import BaseButton from '@material-ui/core/Button'
import ConditionalWrap from './ConditionalWrap'
import FormControl from './form/FormControl'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0),
  },
}))

function Button({
  children,
  color,
  component,
  disabled,
  type,
  variant,
  to,
  isWrapped,
  classes,
  className,
  testid,
  onClick,
}) {
  const compClasses = useStyles({ color })

  return (
    <ConditionalWrap
      condition={isWrapped}
      wrap={child => (
        <FormControl className={compClasses.control}>{child}</FormControl>
      )}
    >
      <BaseButton
        className={cx(compClasses.button, className)}
        color={color}
        component={to ? Link : component}
        disabled={disabled}
        type={type}
        variant={variant}
        to={to}
        classes={classes}
        onClick={onClick}
        data-testid={testid}
      >
        {children}
      </BaseButton>
    </ConditionalWrap>
  )
}

// Used in ButtonsSpacer!
Button.displayName = 'Button'

Button.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
  to: PropTypes.string,
  isWrapped: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string),
  testid: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  type: 'button',
  variant: 'contained',
  to: null,
  isWrapped: false,
  classes: {},
  className: '',
  testid: null,
  onClick: null,
}

export default Button
