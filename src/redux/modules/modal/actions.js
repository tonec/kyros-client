import { createAction } from '@reduxjs/toolkit'

/*
 * Actions
 * * * * */

const prefix = '@modal'

export const OPEN = `${prefix}/OPEN`
export const CLOSE = `${prefix}/CLOSE`

/*
 * Action creators
 * * * * * * * * */

export function openModal(modalKey, { state } = {}) {
  return {
    type: OPEN,
    payload: {
      modalKey,
      modalState: state,
    },
  }
}

export const closeModal = createAction(CLOSE)
