import React from 'react'
import PropTypes from 'prop-types'
import { Box, Meta, Header } from 'components'
import { childrenType } from '../../types'

const LayoutMain = ({ children, title }) => (
  <div>
    <Meta title={title} />
    <Header />
    <Box>{children}</Box>
  </div>
)

LayoutMain.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string,
}

LayoutMain.defaultProps = {
  title: null,
}

export default LayoutMain
