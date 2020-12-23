import React from 'react';
import PropTypes, { arrayOf, node } from 'prop-types';
import BaseList from '@material-ui/core/List';
import BaseListItem from '@material-ui/core/ListItem';
import BaseListItemText from '@material-ui/core/ListItemText';
import BaseListItemIcon from '@material-ui/core/ListItemIcon';
import { childrenType } from '../../types';

// List
function List({ children, dense }) {
  return <BaseList dense={dense}>{children}</BaseList>;
}

List.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  dense: PropTypes.bool,
};

List.defaultProps = {
  dense: false,
};

// List Item
function ListItem({ children }) {
  return <BaseListItem>{children}</BaseListItem>;
}

ListItem.propTypes = {
  children: childrenType.isRequired,
};

function ListItemText({ primary, secondary }) {
  return <BaseListItemText primary={primary} secondary={secondary} />;
}

// List Item Text
ListItemText.propTypes = {
  primary: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  secondary: PropTypes.oneOfType([arrayOf(node), node]),
};

ListItemText.defaultProps = {
  secondary: null,
};

// List Item Icon
function ListItemIcon({ children }) {
  return <BaseListItemIcon>{children}</BaseListItemIcon>;
}

ListItemIcon.propTypes = {
  children: childrenType.isRequired,
};

List.Item = ListItem;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;

export default List;
