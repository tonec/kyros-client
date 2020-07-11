import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { Box } from 'components'

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

AppBar.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}

export default AppBar
