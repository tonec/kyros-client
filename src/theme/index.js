import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import button from './overrides/button'
import input from './overrides/input'
import formControlLabel from './overrides/formControlLabel'
import label from './overrides/label'
import tableRow from './overrides/tableRow'

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: button,
    MuiOutlinedInput: input,
    MuiFormControlLabel: formControlLabel,
    MuiFormLabel: label,
    MuiTableRow: tableRow,
  },
})

export default theme
