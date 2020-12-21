/* eslint-disable consistent-return */
import isEmpty from './isEmpty'

export function required(value) {
  if (isEmpty(value)) {
    return 'Required'
  }
}

export function email(value) {
  // eslint-disable-next-line
  if (
    !isEmpty(value) &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      value,
    )
  ) {
    return 'Invalid email address'
  }
}

export function emailLocalPart(value) {
  if (
    !isEmpty(value) &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/i.test(value)
  ) {
    return 'Invalid email address'
  }
}

export function phone(value) {
  if (!isEmpty(value) && !/^\+\d+/i.test(value)) {
    return 'Must include the intl dialing code, e.g. +1'
  }
}

export function validateIf(value, values, fields, validation) {
  let validationNeeded = false

  fields.forEach(field => {
    validationNeeded = !isEmpty(values[field])
  })

  if (validationNeeded) {
    return validation(value)
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`
    }
  }
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`
    }
  }
}

export function integer(value) {
  if (!isEmpty(value) && !Number.isInteger(Number(value))) {
    return 'Must be an integer'
  }
}

export function oneOf(enumeration) {
  return value => {
    if (!enumeration.includes(value)) {
      return `Must be one of: ${enumeration.join(', ')}`
    }
  }
}

export function match(field, value, values) {
  if (values) {
    if (value !== values[field]) {
      return 'Do not match'
    }
  }
}

export function commaSeperatedInts(value) {
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
