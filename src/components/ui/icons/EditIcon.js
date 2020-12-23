import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '..';

function EditIcon({ style, size, className }) {
  return (
    <SvgIcon
      viewBox="0 0 8.766 8.765"
      style={style}
      size={size}
      className={className}
    >
      <path
        d="M5.449,1.463,7.233,3.254,2.719,7.789.937,6ZM8.586,1.03l-.8-.8a.786.786,0,0,0-1.115,0L5.914,1,7.7,2.789,8.586,1.9a.613.613,0,0,0,0-.865ZM0,8.517a.2.2,0,0,0,.246.243l1.987-.484L.454,6.483Z"
        transform="translate(0.001 0)"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

EditIcon.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
};

EditIcon.defaultProps = {
  style: null,
  size: null,
  className: null,
};

export default EditIcon;
