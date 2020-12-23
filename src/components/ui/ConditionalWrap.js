import React from 'react';
import PropTypes from 'prop-types';
import { childrenType } from '../../types';

const ConditionalWrap = ({ condition, wrap, children }) => {
  return condition ? wrap(children) : <>{children}</>;
};

ConditionalWrap.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrap: PropTypes.func.isRequired,
  children: childrenType.isRequired,
};

export default ConditionalWrap;
