import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function ForestIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 16.674 16.645"
      style={style}
      size={size}
      className={className}
    >
      <g transform="translate(-3 -3.055)">
        <path
          d="M3.262,15.975h9.783a.261.261,0,0,0,.229-.138.255.255,0,0,0-.013-.268l-2.54-3.746h1.4a.266.266,0,0,0,.232-.141.262.262,0,0,0-.016-.268L10.258,8.339h1.12a.259.259,0,0,0,.216-.406L8.369,3.17a.261.261,0,0,0-.432,0L4.711,7.932A.261.261,0,0,0,4.7,8.2a.256.256,0,0,0,.229.138H6.047L3.963,11.413a.262.262,0,0,0-.013.268.259.259,0,0,0,.229.141h1.4L3.046,15.568a.261.261,0,0,0-.016.268A.269.269,0,0,0,3.262,15.975Z"
          transform="translate(-0.001)"
          fill="currentColor"
        />
        <path
          d="M34.382,18.044h.849l-.677,1a.773.773,0,0,1-.024.663.8.8,0,0,1-.693.417h-.016l-.2.3.348.514h.876l-.438.646,1,1.474a.784.784,0,0,1-.649,1.219H32.564l-.154.221a.259.259,0,0,0,.214.409h8.5a.261.261,0,0,0,.224-.391l-2.108-3.58h1.118a.269.269,0,0,0,.232-.138.261.261,0,0,0-.016-.268l-1.683-2.483h.849a.26.26,0,0,0,.214-.406L37.276,13.68a.269.269,0,0,0-.43,0l-2.681,3.957a.257.257,0,0,0-.016.266A.266.266,0,0,0,34.382,18.044Z"
          transform="translate(-21.712 -7.777)"
          fill="currentColor"
        />
        <path
          d="M19.414,57.329H16.226V55.8H14.475v1.532H9.152V54.645h-2v2.683H3.261a.261.261,0,1,0,0,.521H19.414a.261.261,0,1,0,0-.521Z"
          transform="translate(0 -38.149)"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
}

ForestIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

ForestIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default ForestIcon;
