/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseIconButton from '@material-ui/core/IconButton'

function IconButton({ children, color, className, testid, onClick }) {
  return (
    <BaseIconButton
      color={color}
      className={className}
      data-testid={testid}
      onClick={onClick}
    >
      {children}
    </BaseIconButton>
  )
}

IconButton.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  testid: PropTypes.string,
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  color: 'default',
  className: null,
  testid: null,
  onClick: null,
}

export default IconButton
