import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'
import { Box } from 'components'

function Card({ children }) {
  return (
    <Box background="light-1" pad="medium">
      {children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]),
}

export default Card
