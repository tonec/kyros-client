/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { childrenType } from '../../types';
import Box from './Box';
import Card from './Card';

const useStyles = makeStyles({
  mainContainer: {
    width: '100%',
    height: '100vh',
  },
  card: {
    position: 'relative',
    height: '100vh',
  },
});

function Main({ children, clone, component, className, spacing }) {
  const classes = useStyles();

  return (
    <div className={cx(classes.mainContainer, className)}>
      <Box clone={clone} component={component} spacing={spacing}>
        <Card className={classes.card} flush>
          {children}
        </Card>
      </Box>
    </div>
  );
}

Main.propTypes = {
  children: childrenType.isRequired,
  clone: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Main.defaultProps = {
  clone: false,
  component: 'main',
  className: '',
  spacing: {},
};

export default Main;
