/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

export type MergeElementProps<
  T extends React.ElementType,
  P extends Record<string, unknown> = Record<string, unknown>
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export const isOfType = <T>(
  varToBeChecked: any,
  propertyToCheckFor: keyof T,
): varToBeChecked is T =>
  (varToBeChecked as T)[propertyToCheckFor] !== undefined
