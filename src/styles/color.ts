import { Theme } from '@material-ui/core'

let theme: Theme

export const setTheme = (th: Theme): void => {
  theme = th
}

export type ColorVariant =
  | 'primary'
  | 'primary.dark'
  | 'secondary'
  | 'secondary.dark'
  | 'white'
  | 'black'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'disabled'

export default (variant: ColorVariant): string => {
  switch (variant) {
    case 'primary':
      return theme.palette.primary.main

    case 'primary.dark':
      return theme.palette.primary.dark

    case 'secondary':
      return theme.palette.secondary.main

    case 'secondary.dark':
      return theme.palette.secondary.dark

    case 'white':
      return theme.palette.common.white

    case 'black':
      return theme.palette.common.black

    case 'info':
      return theme.palette.info.light

    case 'warning':
      return theme.palette.warning.dark

    case 'error':
      return theme.palette.error.main

    case 'success':
      return theme.palette.success.light

    case 'disabled':
      return theme.palette.grey[50]

    default:
      return theme.palette.info.light
  }
}
