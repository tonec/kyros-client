import React from 'react'
import { oneOfType, arrayOf, node, string } from 'prop-types'
import { Box, Meta, Header } from 'components'

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  title: string
}

const defaultProps = {
  title: null
}

const LayoutMain = ({ children, title }) => (
  <div>
    <Meta title={title} />
    <Header />
    <Box>
      {children}
    </Box>
  </div>
)

LayoutMain.propTypes = propTypes
LayoutMain.defaultProps = defaultProps

export default LayoutMain
