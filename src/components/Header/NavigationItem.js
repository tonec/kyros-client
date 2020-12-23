import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Anchor } from '../ui';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    color: ({ active, disabled }) => {
      if (disabled) {
        return '#2b4f5c';
      }
      return active ? '#07181f' : theme.palette.common.white;
    },

    backgroundColor: ({ active }) =>
      active ? theme.palette.common.white : 'transparent',

    '& a': {
      display: 'block',
      textAlign: 'center',
      padding: '6px 0',
      outline: 'none',
      cursor: ({ disabled }) => (disabled ? 'initial' : 'pointer'),
    },
  },
}));

function NavigationItem({ path, icon, active, disabled, handleClick }) {
  const classes = useStyles({ active, disabled });
  const history = useHistory();

  const onClick = event => {
    event.preventDefault();
    event.stopPropagation();

    if (disabled) return;

    if (typeof handleClick === 'function') {
      handleClick();
      return;
    }

    if (path && path !== history.location.pathname) {
      history.push(path);
    }
  };

  return (
    <li className={classes.item}>
      <Anchor onClick={onClick}>{icon}</Anchor>
    </li>
  );
}

NavigationItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.element,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

NavigationItem.defaultProps = {
  path: '',
  icon: null,
  disabled: false,
  handleClick: null,
};

export default NavigationItem;
