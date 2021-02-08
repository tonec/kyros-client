import React from 'react'
import { UseLink } from 'types'
import isValid from 'date-fns/isValid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'

interface Props {
  label: string
  $value: UseLink & { value: ParsableDate }
  variant: 'inline' | 'dialog' | 'static' | undefined
  format: string
  margin: 'normal' | 'none' | 'dense' | undefined
  disableToolbar: boolean
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
    if (isValid(date)) {
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
        value={$value.value}
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
