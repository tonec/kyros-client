import React from 'react'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootReducer'
import { NormalizedSchema } from 'normalizr'
import { AxiosInstance, AxiosPromise } from 'axios'
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles'
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

export const refType = oneOfType([func, shape({ current: oneOfType([instanceOf(Element)]) })])

export const maxWidthType = oneOfType([bool, oneOf(['xs', 'sm', 'md', 'lg', 'xl'])])

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

/*
 * Utility types
 * * * * * * * * */

export type Obj<T = unknown> = Record<string, T>

export type MergeElementProps<
  T extends React.ElementType,
  P extends Record<string, unknown> = Record<string, unknown>
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export const isOfType = <T>(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  varToBeChecked: any,
  propertyToCheckFor: keyof T,
): varToBeChecked is T => (varToBeChecked as T)[propertyToCheckFor] !== undefined

/*
 * API types
 * * * * * * * * */

export type ReactElementWithDisplayName = React.ReactElement & {
  type: {
    displayName: string
  }
}

/*
 * State types
 * * * * * * * * */

export interface Select<T> {
  (arg: RootState): T | null
}

export type Normalized = NormalizedSchema<
  {
    [key: string]:
      | {
          [key: string]: any
        }
      | undefined
  },
  any
>

/*
 * API types
 * * * * * * * * */

export interface APIAction {
  type: [string, string, string]
  request: ({ client }: { client: AxiosInstance }) => AxiosPromise
  flash?: { success?: string; error?: string }
  closeModal?: boolean
}

export type APIPayload<T> = PayloadAction<{
  action: string
  entity: string
  data: { entities: T[] }
}>

/*
 * UI types
 * * * * * * * * */

export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Spacings =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'

export type Spacing =
  | {
      [P in Spacings]?: number
    }
  | undefined

export interface UseLink {
  value: string | number | boolean | Date
  set: (...args: any) => void
  check: () => void
  error: string
}

export type Column = {
  key: string
  name?: string
}

export type Status = 'info' | 'warning' | 'error' | 'success'

/*
 * Entities
 * * * * * * * * */

export interface Client {
  id: string
  name: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
}
