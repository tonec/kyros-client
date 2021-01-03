import { grey } from '@material-ui/core/colors'

export default {
  contained: {
    boxShadow: 'none',
    borderRadius: '4px',
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
}
