import { Mutator } from 'final-form'

// Set for form field value
export const set: Mutator = ([name, value], state, { changeValue }) => {
  changeValue(state, name, () => value)
}

// Clears a form value
export const clear: Mutator = ([name], state, { changeValue }) => {
  changeValue(state, name, () => '')
}

// Converts a form value to uppercase
export const upper: Mutator = ([name], state, { changeValue }) => {
  changeValue(state, name, value => value && value.toUpperCase())
}

export const setFieldTouched: Mutator = (args, state) => {
  const [name, touched] = args
  const field = state.fields[name]

  if (field) {
    field.touched = !!touched
  }
}
