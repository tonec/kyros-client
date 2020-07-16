import React from 'react'
import { oneOfType, arrayOf, node, string } from 'prop-types'
import { Box, Meta, Header } from 'components'

const LayoutMain = ({ children, title }) => (
  <div>
    <Meta title={title} />
    <Header />
    <Box>
      {children}
    </Box>
  </div>
)

LayoutMain.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  title: string
}

LayoutMain.defaultProps = {
  title: null
}

export default LayoutMain
