import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import BaseTabs from '@material-ui/core/Tabs'
import BaseTab from '@material-ui/core/Tab'
import Box from './Box'

function Tabs({
  children,
  value,
  indicatorColor,
  textColor,
  variant,
  centered,
  onChange,
  testid,
}) {
  return (
    <BaseTabs
      value={value}
      indicatorColor={indicatorColor}
      textColor={textColor}
      variant={variant}
      onChange={onChange}
      centered={centered}
      data-testid={testid}
    >
      {children}
    </BaseTabs>
  )
}

Tabs.muiName = 'Tabs'

Tabs.propTypes = {
  children: childrenType.isRequired,
  value: PropTypes.string.isRequired,
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
  textColor: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  centered: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string,
}

Tabs.defaultProps = {
  indicatorColor: 'primary',
  textColor: 'inherit',
  variant: 'standard',
  centered: false,
  testid: null,
}

function Tab({ label, value, disabled, className, onChange }) {
  return (
    <BaseTab
      label={label}
      value={value}
      disabled={disabled}
      className={className}
      data-testid={`tab-${label.toLowerCase().split(' ').join('-')}`}
      onChange={onChange}
    />
  )
}

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

Tab.defaultProps = {
  disabled: false,
  className: null,
  onChange: undefined,
}

function TabPanel({ children, value, index, className, testid }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className={className}
      aria-labelledby={`simple-tab-${index}`}
      data-testid={testid}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: childrenType.isRequired,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  testid: PropTypes.string,
}

TabPanel.defaultProps = {
  testid: null,
  className: null,
}

Tabs.Tab = Tab
Tabs.TabPanel = TabPanel

export default Tabs
