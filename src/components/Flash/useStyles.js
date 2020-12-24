import { makeStyles, color } from 'styles'

export default makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginLeft: '-50%',
    backgroundColor: '#fff',
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: ({ status }) => color(theme, status),
    boxShadow: theme.shadows[1],
  },

  message: {
    height: '100%',
    padding: theme.spacing(2, 4, 2, 6),
    flex: 2,

    '& svg': {
      position: 'absolute',
      top: '50%',
      left: theme.spacing(2),
      transform: 'translateY(-50%)',
      color: ({ status }) => color(theme, status),
    },
  },

  dismiss: {
    flex: 1,
    textAlign: 'center',
    borderLeft: `1px solid ${theme.palette.grey[100]}`,

    '& button': {
      display: 'block',
      width: '100%',
      height: '100%',
      border: 0,
      cursor: 'pointer',
    },
  },
}))
