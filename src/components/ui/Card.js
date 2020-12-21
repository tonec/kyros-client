import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { Card as BaseCard } from 'grommet'

function Card({ children, background, pad, elevation }) {
  return (
    <BaseCard background={background} pad={pad} elevation={elevation}>
      {children}
    </BaseCard>
  )
}

Card.propTypes = {
  children: childrenType.isRequired,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  pad: PropTypes.string,
  elevation: PropTypes.oneOf(["none",
    "small",
    "medium",
    "large",
    "xlarge",
  ])
}

Card.defaultProps = {
  background: 'light-1',
  pad: 'medium',
  elevation: 'medium'
}

export default Card
