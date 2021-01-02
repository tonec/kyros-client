import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTableCell from '@material-ui/core/TableCell'

function TableCell({
  children,
  variant,
  component,
  align,
  colSpan,
  className,
  style,
  testid,
  onClick,
}) {
  return (
    <BaseTableCell
      align={align}
      variant={variant}
      component={component}
      colSpan={colSpan}
      className={className}
      style={style}
      data-testid={testid}
      onClick={onClick}
    >
      {children}
    </BaseTableCell>
  )
}

TableCell.propTypes = {
  children: childrenType,
  variant: PropTypes.string,
  component: PropTypes.string,
  align: PropTypes.string,
  colSpan: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  testid: PropTypes.string,
  onClick: PropTypes.func,
}

TableCell.defaultProps = {
  children: null,
  variant: 'body',
  component: 'td',
  align: 'inherit',
  colSpan: null,
  className: null,
  style: null,
  testid: null,
  onClick: null,
}

export default TableCell
