import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import overrides from './overrides'

const theme = createMuiTheme()

theme.palette = palette(theme)
theme.typography = typography(theme)
theme.overrides = overrides(theme)

export default responsiveFontSizes(theme)
