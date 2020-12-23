import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BaseDivider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

function Divider({ component, variant, gutterBottom, className }) {
  const classes = useStyles({ gutterBottom });

  return (
    <BaseDivider
      component={component}
      variant={variant}
      className={cx(classes.root, className)}
    />
  );
}

Divider.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
  className: PropTypes.string,
};

Divider.defaultProps = {
  component: 'hr',
  variant: 'fullWidth',
  gutterBottom: false,
  className: null,
};

export default Divider;
