import React from 'react'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootReducer'
import { NormalizedSchema } from 'normalizr'
import { AxiosInstance, AxiosPromise } from 'axios'
import { Store } from 'redux'
import { History } from 'history'
import { TIMESCALES_OPTIONS } from 'utils/constants'

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

export const assertNever = (x: never): never => {
  throw new Error('Unexpected object: ' + x)
}

export type ReactElementWithDisplayName = React.ReactElement & {
  type: {
    displayName: string
  }
}

export interface Locals {
  history: History
  store: Store
  match: any[]
  params: any[]
  location: History['location']
}

/*
 * State types
 * * * * * * * * */

export interface Select<T> {
  (arg: RootState): T
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

export type Timescales = keyof typeof TIMESCALES_OPTIONS

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
