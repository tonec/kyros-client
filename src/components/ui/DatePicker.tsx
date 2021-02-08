import React from 'react'
import isValid from 'date-fns/isValid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import { UseStateRef } from 'valuelink/lib'

interface Props {
  label?: string
  $value?: UseStateRef<ParsableDate> | null
  variant?: 'inline' | 'dialog' | 'static' | undefined
  format?: string
  margin?: 'normal' | 'none' | 'dense' | undefined
  disableToolbar?: boolean
}

function DatePicker({
  label,
  $value,
  variant = 'inline',
  format = 'yyyy-MM-dd',
  margin = 'normal',
  disableToolbar = true,
}: Props): JSX.Element {
  const handleDateChange = (date: MaterialUiPickersDate) => {
    if ($value && isValid(date)) {
      $value.set(date)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        fullWidth
        inputVariant="outlined"
        variant={variant}
        format={format}
        margin={margin}
        value={$value ? $value.value : null}
        disableToolbar={disableToolbar}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': `Change date ${label}`,
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
