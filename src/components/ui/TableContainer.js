import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTableContainer from '@material-ui/core/TableContainer'

function TableContainer({ children, component, className }) {
  return (
    <BaseTableContainer component={component} className={className}>
      {children}
    </BaseTableContainer>
  )
}

TableContainer.propTypes = {
  children: childrenType.isRequired,
  component: PropTypes.string,
  className: PropTypes.string,
}

TableContainer.defaultProps = {
  component: 'div',
  className: null,
}

export default TableContainer
