import { Obj } from 'types'
import isEmpty from './isEmpty'

export type Value = string | number | null | undefined

export function required(value: Value): string | undefined {
  if (isEmpty(value)) {
    return 'Required'
  }
}

export function email(value: Value): string | undefined {
  // eslint-disable-next-line
  if (
    !isEmpty(value) &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      value as string,
    )
  ) {
    return 'Invalid email address'
  }
}

export function emailLocalPart(value: Value): string | undefined {
  if (
    !isEmpty(value) &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/i.test(value as string)
  ) {
    return 'Invalid email address'
  }
}

export function phone(value: Value): string | undefined {
  if (!isEmpty(value) && !/^\+\d+/i.test(value as string)) {
    return 'Must include the intl dialing code, e.g. +1'
  }
}

export function validateIf(
  value: Value,
  values: Obj<string>,
  fields: string[],
  validation: (value: Value) => string | undefined,
): string | undefined {
  let validationNeeded = false

  fields.forEach(field => {
    validationNeeded = !isEmpty(values[field])
  })

  if (validationNeeded) {
    return validation(value)
  }
}

export function minLength(min: number) {
  return (value: Value): string | undefined => {
    if (!isEmpty(value) && (value as string).length < min) {
      return `Must be at least ${min} characters`
    }
  }
}

export function maxLength(max: number) {
  return (value: Value): string | undefined => {
    if (!isEmpty(value) && (value as string).length > max) {
      return `Must be no more than ${max} characters`
    }
  }
}

export function integer(value: Value): string | undefined {
  if (!isEmpty(value) && !Number.isInteger(Number(value))) {
    return 'Must be an integer'
  }
}

export function oneOf(enumeration: string[]) {
  return (value: Value): string | undefined => {
    if (!enumeration.includes(value as string)) {
      return `Must be one of: ${enumeration.join(', ')}`
    }
  }
}

export function match(field: string, value: string, values: Obj<string>): string | undefined {
  if (values) {
    if (value !== values[field]) {
      return 'Do not match'
    }
  }
}

export function commaSeperatedInts(value: string | string[]): string | undefined {
  // Generate array from string, if not already
  let values
  if (Array.isArray(value)) {
    values = value
  } else {
    values = value.split(',')
  }

  // Check array contains only ints
  const result = values.every(val => {
    const isInt = Number.isInteger(Number(val))
    if (isInt) return true
    return isInt && !isEmpty(val.trim())
  })

  if (!result) return 'Must be comma seperated integer values'
}
