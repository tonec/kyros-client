import React from 'react'
import { string, object, oneOfType, arrayOf, node } from 'prop-types'
import { Box as BaseBox } from 'grommet'

const propTypes = {
  children: oneOfType([arrayOf(node), node]),
  tag: string,
  direction: string,
  align: string,
  justify: string,
  background: string,
  pad: object,
  elevation: string
}

const defaultProps = {
  tag: null,
  direction: null,
  align: null,
  justify: null,
  background: null,
  pad: null,
  elevation: null
}

const Box = ({
  tag,
  direction,
  align,
  justify,
  background,
  pad,
  elevation,
  children
}) => (
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

Box.propTypes = propTypes
Box.defaultProps = defaultProps

export default Box
