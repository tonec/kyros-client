import React from 'react'
import { User, userType } from 'types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { openModal } from 'helpers/modalQS'
import { deleteUser } from 'redux/modules/user/actions'
import { ConfirmAction, Icon, IconButton, Popover } from 'components'

const useStyles = makeStyles(theme => ({
  actions: {
    position: 'relative',
    padding: theme.spacing(0, 2),
  },
  triggerWrap: {
    lineHeight: '48px',
    '& > span': {},
  },
  trigger: {
    display: 'block',

    '& > svg': {
      verticalAlign: 'middle',
    },
  },
}))

interface Props {
  user: User
}

function UsersTableRowActions({ user }: Props): JSX.Element {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onEdit = () => {
    openModal('user', {
      state: { id: user.id, view: 'edit' },
    })
  }

  const onDelete = () => {
    dispatch(deleteUser(user.id))
  }

  return (
    <div className={classes.actions}>
      <Popover
        triggerWrapClassName={classes.triggerWrap}
        renderTrigger={() => (
          <span className={classes.trigger}>
            <Icon variant="more" />
          </span>
        )}
      >
        <IconButton aria-label="Edit user" onClick={onEdit}>
          <Icon variant="edit" />
        </IconButton>

        <ConfirmAction title="Are you sure?" action="Delete user">
          {confirm => (
            <IconButton aria-label="Delete user" onClick={confirm(onDelete)}>
              <Icon variant="delete" />
            </IconButton>
          )}
        </ConfirmAction>
      </Popover>
    </div>
  )
}

UsersTableRowActions.propTypes = {
  user: userType.isRequired,
}

export default UsersTableRowActions
