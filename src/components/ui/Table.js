import React from 'react';
import PropTypes from 'prop-types';
import BaseTable from '@material-ui/core/Table';
import BaseTableContainer from '@material-ui/core/TableContainer';
import BaseTableHead from '@material-ui/core/TableHead';
import BaseTableBody from '@material-ui/core/TableBody';
import BaseTableRow from '@material-ui/core/TableRow';
import BaseTableCell from '@material-ui/core/TableCell';
import { childrenType } from '../../types';

// Table
function Table({ children, className }) {
  return <BaseTable className={className}>{children}</BaseTable>;
}

Table.propTypes = {
  children: childrenType.isRequired,
  className: PropTypes.string,
};

Table.defaultProps = {
  className: null,
};

// Table Container
function TableContainer({ children, component }) {
  return (
    <BaseTableContainer component={component}>{children}</BaseTableContainer>
  );
}

TableContainer.propTypes = {
  children: childrenType.isRequired,
  component: PropTypes.string,
};

TableContainer.defaultProps = {
  component: 'div',
};

// Table Head
function TableHead({ children }) {
  return <BaseTableHead>{children}</BaseTableHead>;
}

TableHead.propTypes = {
  children: childrenType.isRequired,
};

// Table Body
function TableBody({ children }) {
  return <BaseTableBody>{children}</BaseTableBody>;
}

TableBody.propTypes = {
  children: childrenType.isRequired,
};

// Table Row
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
  );
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
};

TableRow.defaultProps = {
  hover: false,
  role: null,
  tabIndex: null,
  selected: false,
  style: null,
  className: null,
  testid: null,
};

// Table Cell
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
  );
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
};

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
};

Table.Container = TableContainer;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
