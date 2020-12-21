import {
  arrayOf,
  bool,
  func,
  instanceOf,
  node,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types'

export const childrenType = oneOfType([arrayOf(node), node])

export const useLinkType = shape({
  value: oneOfType([string, number, bool, instanceOf(Date)]),
  set: func,
})

export const formInputType = shape({
  name: string,
  value: oneOfType([string, number]),
  onChange: func,
})

export const formMetaType = shape({ error: string, touched: bool })

// eslint-disable-next-line no-use-before-define
const Element = typeof Element === 'undefined' ? () => {} : Element

export const refType = oneOfType([
  func,
  shape({ current: oneOfType([instanceOf(Element)]) }),
])