import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

function Progress({ type, variant, size, value, className }) {
  if (type === 'linear') {
    return (
      <LinearProgress
        variant={variant}
        size={size}
        value={value}
        className={className}
      />
    );
  }

  return (
    <CircularProgress
      variant={variant}
      size={size}
      value={value}
      className={className}
    />
  );
}

Progress.propTypes = {
  type: PropTypes.oneOf(['linear', 'circular']).isRequired,
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static'])
    .isRequired,
  size: PropTypes.number,
  value: PropTypes.number,
  className: PropTypes.string,
};

Progress.defaultProps = {
  value: 0,
  size: 40,
  className: '',
};

export default Progress;
