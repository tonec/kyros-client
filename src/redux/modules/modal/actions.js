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

export function openModal(modalKey, state = {}) {
  return ({ dispatch }) => {
    const queryStringObject = { modalKey }

    if (state) {
      queryStringObject.modalState = state
    }

    return addQS(dispatch, queryStringObject)
  }
}

export const closeModal = createAction(CLOSE)
