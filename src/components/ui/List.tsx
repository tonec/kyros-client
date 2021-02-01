import React, { ComponentPropsWithoutRef } from 'react'
import BaseList from '@material-ui/core/List'
import BaseListItem from '@material-ui/core/ListItem'
import BaseListItemText from '@material-ui/core/ListItemText'
import BaseListItemIcon from '@material-ui/core/ListItemIcon'

// List
type ListProps = ComponentPropsWithoutRef<typeof BaseList>

function List({ children, dense }: ListProps): JSX.Element {
  return <BaseList dense={dense}>{children}</BaseList>
}

// List Item
type ListItemProps = ComponentPropsWithoutRef<typeof BaseListItem>

function ListItem({ children }: ListItemProps): JSX.Element {
  return <BaseListItem>{children}</BaseListItem>
}

// List Item Text
type ListItemTextProps = ComponentPropsWithoutRef<typeof BaseListItemText>

function ListItemText({ primary, secondary }: ListItemTextProps): JSX.Element {
  return <BaseListItemText primary={primary} secondary={secondary} />
}

// List Item Icon
type ListItemIconProps = ComponentPropsWithoutRef<typeof BaseListItemIcon>

function ListItemIcon({ children }: ListItemIconProps): JSX.Element {
  return <BaseListItemIcon>{children}</BaseListItemIcon>
}

List.Item = ListItem
List.ItemText = ListItemText
List.ItemIcon = ListItemIcon

export default List
