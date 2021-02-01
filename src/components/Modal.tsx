import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal as closeModalQS } from 'helpers/modalQS'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalKey, getModalState } from 'redux/modules/modal/selectors'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'
import { RootState } from 'redux/rootReducer'

type Title = Record<string, string> | string
type State = Record<string, string>
type GetTitleString = (title: Title, state: State) => string | null

const getTitleString: GetTitleString = (title, state) => {
  if (typeof title === 'string') return title

  const view = state.view || 'create'

  return title[view] || title.create || null
}

type Query = Record<string, string> & {
  modalState: State
}

type MappedState = {
  query: Query
  modalKey: string
  modalState: State
}

type Props = MappedState & {
  children: (...args: any) => React.ReactNode
  title: string
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
  const state = modalStateQS || modalState || {}

  if (key !== name) return null

  const titleString = getTitleString(title, state)
  const open = Boolean(key)

  const handleClose = () => {
    closeModal()
    closeModalQS()
  }

  return (
    <Dialog title={titleString} open={open} onClose={handleClose}>
      {children(state)}
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
