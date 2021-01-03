import { createAction } from '@reduxjs/toolkit'
import { addQS } from 'utils'

/*
 * Actions
 * * * * */

const prefix = '@modal'

export const OPEN = `${prefix}/OPEN`
export const CLOSE = `${prefix}/CLOSE`

/*
 * Action creators
 * * * * * * * * */

export function openModal(modalKey, options = {}) {
  return ({ dispatch }) => {
    const queryStringObject = { modalKey }

    const { view, state, history = true } = options

    if (view) {
      queryStringObject.modalView = view
    }

    if (state) {
      queryStringObject.modalState = state
    }

    addQS(dispatch, queryStringObject, history)

    dispatch({
      type: OPEN,
      modalKey,
    })
  }
}

export const closeModal = createAction(CLOSE)
