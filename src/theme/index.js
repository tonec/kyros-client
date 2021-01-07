import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import button from './overrides/button'
import checkbox from './overrides/checkbox'
import input from './overrides/input'
import formControlLabel from './overrides/formControlLabel'
import label from './overrides/label'
import tableRow from './overrides/tableRow'

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: button,
    MuiCheckbox: checkbox,
    MuiOutlinedInput: input,
    MuiFormControlLabel: formControlLabel,
    MuiFormLabel: label,
    MuiTableRow: tableRow,
  },
})

export default responsiveFontSizes(theme)
