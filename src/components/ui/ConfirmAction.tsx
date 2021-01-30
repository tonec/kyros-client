import React, { MouseEvent, useState } from 'react'
import ConfirmationDialog from './ConfirmationDialog'

type Props = {
  children: (...args: any) => React.ReactNode
  title?: string
  content?: string
  action?: string
}

type Callback = (event?: MouseEvent) => void

function ConfirmAction({
  children,
  title,
  content,
  action,
}: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const [callback, setCallback] = useState<Callback>()

  const openConfirmationDialog = (callback: Callback) => (
    event: MouseEvent,
  ) => {
    event.preventDefault()
    event.persist()

    setOpen(true)
    setCallback(() => () => callback(event))
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleConfirm = () => {
    if (typeof callback === 'function') {
      callback()
    }
    setOpen(false)
  }

  return (
    <>
      {children(openConfirmationDialog)}
      <ConfirmationDialog
        open={open}
        title={title}
        content={content}
        action={action}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
  )
}

ConfirmAction.defaultProps = {
  title: null,
  content: null,
  action: null,
}

export default ConfirmAction
