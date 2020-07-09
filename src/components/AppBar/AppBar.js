import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { Box } from 'components'

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}

const AppBar = ({ children }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="light-2"
    pad={{ vertical: 'small', horizontal: 'medium' }}
    elevation="none"
  >
    {children}
  </Box>
)

AppBar.propTypes = propTypes

export default AppBar
