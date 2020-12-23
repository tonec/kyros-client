import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function SearchIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      style={style}
      size={size}
      className={className}
    >
      <g>
        <path
          d="M292,414.7c5.3-5,12.7,2.5,7.7,7.8S287,420,292,414.7Z"
          transform="translate(-286 -409)"
          fill="none"
        />
        <path
          d="M292.3,415.1c4.8-4.6,11.6,2.3,7.1,7S287.8,419.8,292.3,415.1Z"
          transform="translate(-286 -409)"
          fill="none"
          stroke="currentColor"
        />
      </g>
      <line
        x1="14.1"
        y1="13.8"
        x2="19"
        y2="18.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2px"
      />
    </SvgIcon>
  );
}

SearchIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

SearchIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default SearchIcon;
