/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { childrenType } from '../../types';
import Box from './Box';
import Card from './Card';

const useStyles = makeStyles({
  asideContainer: {
    height: '100vh',
  },
  card: {
    width: 318,
    position: 'relative',
    height: '100vh',
  },
});

function Aside({ children, clone, component, className, spacing }) {
  const classes = useStyles();

  return (
    <div className={cx(classes.asideContainer, className)}>
      <Box clone={clone} component={component} spacing={spacing}>
        <Card className={classes.card} flush>
          {children}
        </Card>
      </Box>
    </div>
  );
}

Aside.propTypes = {
  children: childrenType.isRequired,
  clone: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Aside.defaultProps = {
  clone: false,
  component: 'aside',
  className: '',
  spacing: {},
};

export default Aside;
