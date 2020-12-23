import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function AreaIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 15.102 8.108"
      style={style}
      size={size}
      className={className}
    >
      <path
        d="M22.612,59.378,20.6,51.894c0-.005-5.164.007-5.186,0-3.083.057-5.854.031-5.854,0L7.537,59.378a.528.528,0,0,0,.089.427.5.5,0,0,0,.391.2H22.132a.472.472,0,0,0,.391-.2A.528.528,0,0,0,22.612,59.378ZM10.417,52.516h.871c-.021.018.753-.017,1.54,0,.51.011,1.035-.01,1.483,0a3.49,3.49,0,0,0,.461,0h1.333l-1.351,3.378-5.3.231Zm-1.244,4.6,5.937-.249a.475.475,0,0,0,.444-.32l.391-.978,1.475.836.427,2.578H8.675ZM18.861,59l-.5-2.969a.466.466,0,0,0-.249-.356l-1.8-1.031.853-2.133h2.56L21.474,59Z"
        transform="translate(-7.523 -51.892)"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

AreaIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

AreaIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default AreaIcon;
