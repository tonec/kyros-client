/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import merge from 'lodash/merge'
import button from './button'
import card from './card'
import checkbox from './checkbox'
import input from './input'
import formControlLabel from './formControlLabel'
import label from './label'
import radio from './radio'
import tableRow from './tableRow'

export default (theme: any) => {
  return merge(theme.overrides, {
    MuiButton: merge(theme.MuiButton, button),
    MuiCard: merge(theme.MuiCard, card),
    MuiCheckbox: merge(theme.MuiCheckbox, checkbox),
    MuiOutlinedInput: merge(theme.MuiOutlinedInput, input),
    MuiFormControlLabel: merge(theme.MuiFormControlLabel, formControlLabel),
    MuiFormLabel: merge(theme.MuiFormLabel, label),
    MuiRadio: merge(theme.MuiRadio, radio),
    MuiTableRow: merge(theme.MuiTableRow, tableRow),
  })
}
