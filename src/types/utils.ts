import React from 'react'

export type MergeElementProps<
  T extends React.ElementType,
  P extends Record<string, unknown> = Record<string, unknown>
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P
