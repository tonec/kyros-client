import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'
import { makeStyles } from 'styles'
import BaseDialog from '@material-ui/core/Dialog'
import BaseDialogTitle from '@material-ui/core/DialogTitle'
import BaseDialogContent from '@material-ui/core/DialogContent'
import BaseDialogContentText from '@material-ui/core/DialogContentText'
import BaseDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { childrenType } from 'types'

const useStylesTitle = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2, 3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.5),
    color: theme.palette.grey[500],
  },
}))

function DialogTitle({ children, onClose, ...props }) {
  const classes = useStylesTitle()

  return (
    <BaseDialogTitle disableTypography className={classes.root} {...props}>
      <Typography variant="h3">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </BaseDialogTitle>
  )
}

DialogTitle.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  onClose: PropTypes.func.isRequired,
}

const useStylesDialog = makeStyles({
  content: {
    minWidth: 324,
  },
})

function Dialog({ children, title, open, testid, onClose }) {
  const classes = useStylesDialog()

  return (
    <BaseDialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      data-testid={`modal-${title.toLowerCase().replace(' ', '-')}`}
    >
      {title && (
        <DialogTitle id="simple-dialog-title" onClose={onClose}>
          {title}
        </DialogTitle>
      )}
      <BaseDialogContent className={classes.content} dividers>
        {children}
      </BaseDialogContent>
    </BaseDialog>
  )
}

Dialog.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  testid: PropTypes.string,
}

Dialog.defaultProps = {
  title: null,
  testid: null,
}

Dialog.DialogContentText = BaseDialogContentText
Dialog.DialogActions = BaseDialogActions

export default Dialog
