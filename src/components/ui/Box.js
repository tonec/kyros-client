/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import BaseBox from '@material-ui/core/Box';
import { childrenType } from '../../types';

function Box({ children, clone, component, className, spacing }) {
  return (
    <BaseBox
      clone={clone}
      component={component}
      className={className}
      {...spacing}
    >
      {children}
    </BaseBox>
  );
}

Box.propTypes = {
  children: childrenType.isRequired,
  clone: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Box.defaultProps = {
  clone: false,
  component: 'div',
  className: '',
  spacing: {},
};

export default Box;
