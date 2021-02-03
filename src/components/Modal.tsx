import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal as closeModalQS } from 'helpers/modalQS'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalKey, getModalState } from 'redux/modules/modal/selectors'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'
import { RootState } from 'redux/rootReducer'
import { Obj } from 'types'
import { ParsedQs } from 'qs'

type Title = Record<string, string> | string
type State = Record<string, string>

const getTitleString = (title, state: State): string | null => {
  if (typeof title === 'string') return title

  const view = state.view || 'create'

  return title[view] || title.create || null
}

type MappedState = {
  query: ParsedQs
  modalKey: string
  modalState: Obj<string | Obj<string>>
}

type Props = MappedState & {
  children: (...args: any) => React.ReactNode
  title: Record<string, string> | string
  name: string
  closeModal: () => void
}

function Modal({
  children,
  title,
  name,
  modalKey,
  modalState,
  query,
  closeModal,
}: Props): JSX.Element | null {
  const { modalKey: modalKeyQS, modalState: modalStateQS } = query

  const key = modalKeyQS || modalKey
  const ms = modalStateQS || modalState || {}

  if (key !== name) return null

  const titleString = getTitleString(title, ms)
  const open = Boolean(key)

  const handleClose = () => {
    closeModal()
    closeModalQS()
  }

  return (
    <Dialog title={titleString} open={open} onClose={handleClose}>
      {children(ms)}
    </Dialog>
  )
}

const mapState = createStructuredSelector<RootState, MappedState>({
  query: getQuery,
  modalKey: getModalKey,
  modalState: getModalState,
})

const mapDispatch = {
  closeModal,
}

export default connect(mapState, mapDispatch)(Modal)
