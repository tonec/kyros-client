import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function DownIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 8.043 9"
      style={style}
      size={size}
      className={className}
    >
      <g transform="translate(8.043) rotate(90)">
        <path
          d="M8.939,3.875,5.125.061a.207.207,0,0,0-.354.147V1.947H.207A.207.207,0,0,0,0,2.154V5.888A.207.207,0,0,0,.207,6.1H4.771V7.835a.207.207,0,0,0,.354.147L8.939,4.168A.207.207,0,0,0,8.939,3.875Z"
          transform="translate(0 0)"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
}

DownIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

DownIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default DownIcon;
