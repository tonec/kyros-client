import { Theme } from '@material-ui/core'
import merge from 'lodash/merge'

export default (theme: Theme): Theme['typography'] => {
  return merge(theme.typography, {
    h1: {
      fontSize: '2.4rem',
    },

    h2: {
      fontSize: '2.1rem',
    },

    h3: {
      fontSize: '1.8rem',
      fontWeight: 300,
    },

    h4: {
      fontSize: '1.6rem',
      fontWeight: 300,
    },

    h5: {
      fontSize: '1.4rem',
      fontWeight: 300,
    },

    h6: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
  })
}
