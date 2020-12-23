import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';

function AnalyticsIcon({ style, size, className }) {
  return (
    <SvgIcon style={style} size={size} className={className}>
      <g fill="none" stroke="currentColor">
        <path d="M1.74 15.76h5v8h-5z" stroke="none" />
        <path d="M2.24 16.26h4v7h-4z" />
        <path d="M6.74 11.76h5v12h-5z" stroke="none" />
        <path d="M7.24 12.26h4v11h-4z" />
        <path d="M16.74 4.76h5v19h-5z" stroke="none" />
        <path d="M17.24 5.26h4v18h-4z" />
        <g>
          <path d="M11.74 7.76h5v16h-5z" stroke="none" />
          <path d="M12.24 8.26h4v15h-4z" />
        </g>
        <path d="M1.24 14.76l8-9h3l3-4" strokeLinecap="round" />
        <path d="M10.74 1.26h5v5" strokeLinecap="round" />
      </g>
    </SvgIcon>
  );
}

AnalyticsIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

AnalyticsIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default AnalyticsIcon;
