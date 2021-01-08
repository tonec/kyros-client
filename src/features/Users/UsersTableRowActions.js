import React from 'react'
import { userType } from 'types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { openModal } from 'utils/modalQS'
import { deleteUser } from 'redux/modules/user/actions'
import { Icon, IconButton, Popover } from 'components'

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

function UsersTableRowActions({ user }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onEdit = e => {
    e.stopPropagation()

    openModal('user', {
      state: { id: user.id, view: 'edit' },
    })
  }

  const onDelete = e => {
    e.stopPropagation()

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
        <IconButton aria-label="Edit client" onClick={onEdit}>
          <Icon variant="edit" />
        </IconButton>
        <IconButton aria-label="Delete client" onClick={onDelete}>
          <Icon variant="delete" />
        </IconButton>
      </Popover>
    </div>
  )
}

UsersTableRowActions.propTypes = {
  user: userType.isRequired,
}

export default UsersTableRowActions
