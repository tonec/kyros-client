import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StatusIcon, Typography } from '../ui';
import useStyles from './useStyles';

function Flash({ status, message, dismissable, timeout, hideFlash }) {
  const classes = useStyles({ status });

  useEffect(() => {
    let timer;
    if (timeout) {
      timer = setTimeout(hideFlash, timeout);
    }
    return () => clearTimeout(timer);
  }, [timeout, hideFlash]);

  return (
    <div className={classes.root} data-testid="flash">
      <div className={classes.message}>
        <StatusIcon status={status} />
        <Typography variant="body2">{message}</Typography>
      </div>

      {dismissable && (
        <div className={classes.dismiss}>
          <button
            type="button"
            data-testid="button-dismiss"
            onClick={hideFlash}
          >
            <Typography variant="body2">Dismiss</Typography>
          </button>
        </div>
      )}
    </div>
  );
}

Flash.propTypes = {
  status: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  message: PropTypes.string,
  dismissable: PropTypes.bool,
  timeout: PropTypes.number,
  hideFlash: PropTypes.func.isRequired,
};

Flash.defaultProps = {
  status: 'error',
  message: '',
  dismissable: false,
  timeout: null,
};

export default Flash;
