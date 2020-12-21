import React from 'react'
import PropTypes, { object, string } from 'prop-types'
import { childrenType } from 'types'
import { Box as BaseBox } from 'grommet'

function Box({
  tag,
  direction,
  align,
  justify,
  background,
  pad,
  elevation,
  children,
}) {
  return (
    <BaseBox
      tag={tag}
      direction={direction}
      align={align}
      justify={justify}
      background={background}
      pad={pad}
      elevation={elevation}
    >
      {children}
    </BaseBox>
  )
}

Box.propTypes = {
  children: childrenType.isRequired,
  tag: PropTypes.string,
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  background: PropTypes.string,
  pad: PropTypes.oneOfType([string, object]),
  elevation: PropTypes.string,
}

Box.defaultProps = {
  tag: null,
  direction: null,
  align: null,
  justify: null,
  background: null,
  pad: null,
  elevation: null,
}

export default Box
