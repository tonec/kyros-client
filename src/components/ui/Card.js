import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BaseCard from '@material-ui/core/Card';
import { childrenType } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    padding: ({ flush }) => (flush ? 0 : theme.spacing(4)),
  },
}));

function Card({ children, raised, elevation, flush, className }) {
  const classes = useStyles({ flush });

  return (
    <BaseCard
      className={cx(classes.root, className)}
      raised={raised}
      elevation={elevation}
    >
      {children}
    </BaseCard>
  );
}

Card.propTypes = {
  children: childrenType.isRequired,
  raised: PropTypes.bool,
  flush: PropTypes.bool,
  elevation: PropTypes.number,
  className: PropTypes.string,
};

Card.defaultProps = {
  raised: false,
  flush: false,
  elevation: 0,
  className: null,
};

export default Card;
