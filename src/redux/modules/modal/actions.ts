import { AnyAction, createAction } from '@reduxjs/toolkit'
import { Obj } from 'types'

/*
 * Actions
 * * * * */

const prefix = '@modal'

export const OPEN = `${prefix}/OPEN`
export const CLOSE = `${prefix}/CLOSE`

/*
 * Action creators
 * * * * * * * * */

export function openModal(modalKey: string, state: Obj<any>): AnyAction {
  return {
    type: OPEN,
    payload: {
      modalKey,
      modalState: state,
    },
  }
}

export const closeModal = createAction(CLOSE)
