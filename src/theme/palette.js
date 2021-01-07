import merge from 'lodash/merge'

export default theme => {
  return merge(theme.palette, {
    primary: {
      light: '#5d7cf6',
      main: '#404ceb',
      dark: '#2a44a8',
      contrastText: '#fff',
    },

    background: {
      default: '#f1f2f5',
    },

    common: {
      white: '#fbfcfc',
      black: '#2F4858',
      sidebar: '#f1f3f6',
      topbar: '#eceef3',
    },
  })
}
