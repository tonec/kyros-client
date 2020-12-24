import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import button from './overrides/button'
import input from './overrides/input'
import label from './overrides/label'

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: button,
    MuiOutlinedInput: input,
    MuiFormLabel: label,
  },
})

export default theme
