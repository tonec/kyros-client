// Set for form field value
export const set = ([name, value], state, { changeValue }) => {
  changeValue(state, name, () => value)
}

// Clears a form value
export const clear = ([name], state, { changeValue }) => {
  changeValue(state, name, () => '')
}

// Converts a form value to uppercase
export const upper = ([name], state, { changeValue }) => {
  changeValue(state, name, value => value && value.toUpperCase())
}

export const setFieldTouched = (args, state) => {
  const [name, touched] = args
  const field = state.fields[name]

  if (field) {
    field.touched = !!touched
  }
}

export default () => null
