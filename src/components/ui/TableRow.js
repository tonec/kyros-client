import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTableRow from '@material-ui/core/TableRow'

function TableRow({
  children,
  hover,
  role,
  tabIndex,
  selected,
  style,
  className,
  testid,
}) {
  return (
    <BaseTableRow
      hover={hover}
      role={role}
      tabIndex={tabIndex}
      selected={selected}
      style={style}
      className={className}
      data-testid={testid}
    >
      {children}
    </BaseTableRow>
  )
}

TableRow.propTypes = {
  children: childrenType.isRequired,
  hover: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  selected: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  className: PropTypes.string,
  testid: PropTypes.string,
}

TableRow.defaultProps = {
  hover: false,
  role: null,
  tabIndex: null,
  selected: false,
  style: null,
  className: null,
  testid: null,
}

export default TableRow
