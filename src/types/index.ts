import { AxiosInstance, AxiosPromise } from 'axios'
import {
  arrayOf,
  bool,
  func,
  instanceOf,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types'
import { TIMESCALES } from '../utils/constants'

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

export const maxWidthType = oneOfType([
  bool,
  oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
])

export const statusTypes = oneOf(['info', 'warning', 'error', 'success'])

export const userType = shape({
  id: string.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
})

export const usersType = arrayOf(userType)

export const clientType = shape({
  id: string.isRequired,
  name: string.isRequired,
})

export const clientsType = arrayOf(clientType)

export const timescaleType = oneOf(TIMESCALES)

export type User = {
  id: string
  firstName: string
  lastName: string
}

export interface IAPIAction {
  types: [string, string, string]
  request: ({ client }: { client: AxiosInstance }) => AxiosPromise
  flash?: { success?: string; error?: string }
  closeModal?: boolean
}
