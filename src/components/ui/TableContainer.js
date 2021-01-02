import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTableContainer from '@material-ui/core/TableContainer'

function TableContainer({ children, component }) {
  return (
    <BaseTableContainer component={component}>{children}</BaseTableContainer>
  )
}

TableContainer.propTypes = {
  children: childrenType.isRequired,
  component: PropTypes.string,
}

TableContainer.defaultProps = {
  component: 'div',
}

export default TableContainer
