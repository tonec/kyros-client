import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function AddIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 18.469 18.469"
      style={style}
      size={size}
      className={className}
    >
      <path
        d="M9.235,0a9.235,9.235,0,1,0,9.235,9.235A9.245,9.245,0,0,0,9.235,0Zm4.04,10H10v3.271a.77.77,0,0,1-1.539,0V10H5.195a.77.77,0,0,1,0-1.539H8.465V5.195a.77.77,0,1,1,1.539,0V8.465h3.271a.77.77,0,1,1,0,1.539Zm0,0"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

AddIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

AddIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default AddIcon;
