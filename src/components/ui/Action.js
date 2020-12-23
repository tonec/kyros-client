/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { childrenType } from '../../types';
import { getColor } from '../../utils';

const useStyles = makeStyles(theme => {
  return {
    button: {
      fontSize: 14,
      fontWeight: 700,
      border: 'none',
      outline: 'none',
      height: 56,
      lineHeight: '56px',
      textAlign: 'center',
      width: '100%',
      boxShadow: '0px -1px 1px 0px rgba(122, 133, 135, 0.25)',

      cursor: ({ disabled }) => (disabled ? 'initial' : 'pointer'),

      color: ({ variant, disabled }) => {
        if (disabled) {
          return theme.palette.grey[500];
        }
        return variant === 'primary'
          ? getColor(theme, 'white')
          : getColor(theme, 'primary');
      },

      backgroundColor: ({ variant, disabled }) => {
        if (disabled) {
          return theme.palette.grey[300];
        }
        return variant === 'primary' ? getColor(theme, 'primary') : '#f9f9f9';
      },

      '&:hover': {
        color: ({ variant, disabled }) => {
          if (disabled) {
            return theme.palette.grey[500];
          }
          return variant === 'primary'
            ? getColor(theme, 'white')
            : getColor(theme, 'primary.dark');
        },
      },
    },
  };
});

function Action({ children, type, variant, disabled, className, onClick }) {
  const classes = useStyles({ variant, disabled });

  return (
    <button
      type={type}
      className={cx(classes.button, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Action.propTypes = {
  children: childrenType.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  type: 'button',
  variant: 'primary',
  disabled: false,
  className: null,
  onClick: null,
};

export default Action;
