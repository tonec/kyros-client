import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';

function MapIcon({ style, size, className }) {
  return (
    <SvgIcon style={style} size={size} className={className}>
      <g>
        <g fill="none">
          <path d="M12 1a4.3 4.3 0 014 4.6C16 8 12 17 12 17S8 8.1 8 5.6A4.3 4.3 0 0112 1z" />
          <path
            d="M12 2c-1.7 0-3 1.6-3 3.6 0 1.3 1.6 5.6 3 8.9 1.4-3.3 3-7.6 3-9C15 3.7 13.7 2 12 2m0-1c2.2 0 4 2 4 4.6C16 8 12 17 12 17S8 8.1 8 5.6C8 3 9.8 1 12 1z"
            fill="currentColor"
          />
        </g>
        <g transform="translate(10 3)" fill="none" stroke="currentColor">
          <circle cx="2" cy="2" r="2" stroke="none" />
          <circle cx="2" cy="2" r="1.5" />
        </g>
        <path
          d="M12.9 13.5H18l4 8.3H2l4-8.3h5.1"
          fill="none"
          stroke="currentColor"
        />
        <path
          d="M18 14L7.4 21.8zm-2.8 2.4l1.6 5zm-9.7-1.9l5.8 4.1z"
          fill="rgba(0,0,0,0)"
          stroke="currentColor"
        />
      </g>
    </SvgIcon>
  );
}

MapIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

MapIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default MapIcon;
