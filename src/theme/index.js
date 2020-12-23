import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#070606',
      grey: {
        light: '#e8e8e8',
        mid: '#dadada',
        dark: '#929292',
      },
      blue: {},
    },
    primary: {
      main: '#2093ce',
      dark: '#1875A5',
      grad: 'linear-gradient(-90deg, #00a5cf, #00ceb3)',
    },
    secondary: {
      main: '#00ceb3',
    },
    success: {
      main: '#07B075',
    },
    error: {
      main: '#F37521',
    },
    info: {
      main: '#1875A5',
    },
    background: {
      default: '#fafafa',
    },
  },

  typography: {
    h1: {
      fontSize: 20,
      fontWeight: 700,
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 300,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '4px 16px',
      },
      contained: {
        boxShadow: 'none',
        borderRadius: 3,
      },
      containedPrimary: {
        color: '#fff',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        backgroundColor: '#fff',
        border: '1px solid #00ceb3',
        color: '#00ceb3',
        '&:hover': {
          color: '#fff',
          backgroundColor: '#00ceb3',
          boxShadow: 'none',
        },
        '&$disabled': {
          borderColor: grey['300'],
        },
      },
    },

    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.45em',
      },
    },

    MuiInputBase: {
      input: {
        border: '1px solid #dadada',
        borderRadius: 4,
        padding: 6,
        fontSize: 14,
      },
    },

    MuiPaper: {
      root: {
        color: '#070606',
        border: '1px solid #d4d4d4',
      },
      rounded: {
        borderRadius: 3,
      },
    },

    MuiOutlinedInput: {
      input: {
        padding: '7px 11px',
        lineHeight: 1,
      },
      adornedEnd: {
        paddingRight: 0,
      },
    },

    MuiFormLabel: {
      root: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 8,
      },
    },

    MuiTableCell: {
      root: {
        fontSize: 12,
        padding: '4px 9px',
        borderColor: '#d4d4d4',
      },
    },

    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
})

export default theme
