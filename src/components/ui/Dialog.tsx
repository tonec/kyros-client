import React from 'react'
import { makeStyles } from 'styles'
import BaseDialog from '@material-ui/core/Dialog'
import BaseDialogTitle from '@material-ui/core/DialogTitle'
import BaseDialogContent from '@material-ui/core/DialogContent'
import BaseDialogContentText from '@material-ui/core/DialogContentText'
import BaseDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

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

type DialogTitleProps = {
  children: React.ReactNode
  onClose: () => void
}

function DialogTitle({
  children,
  onClose,
  ...props
}: DialogTitleProps): JSX.Element {
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

const useStylesDialog = makeStyles({
  content: {
    minWidth: 324,
  },
})

type DialogProps = {
  children: React.ReactNode
  title?: string | null
  open: boolean
  testid?: string
  onClose: () => void
}

function Dialog({
  children,
  title,
  open,
  testid,
  onClose,
}: DialogProps): JSX.Element {
  const classes = useStylesDialog()

  let testId = 'modal'

  if (title) {
    testId = `modal-${title.toLowerCase().replace(' ', '-')}`
  }

  if (testid) {
    testId = testid
  }

  return (
    <BaseDialog onClose={onClose} open={open} data-testid={testId}>
      {title && <DialogTitle onClose={onClose}>{title}</DialogTitle>}
      <BaseDialogContent className={classes.content} dividers>
        {children}
      </BaseDialogContent>
    </BaseDialog>
  )
}

Dialog.DialogContentText = BaseDialogContentText
Dialog.DialogActions = BaseDialogActions

export default Dialog
