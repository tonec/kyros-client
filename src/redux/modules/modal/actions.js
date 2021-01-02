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

export function openModal() {
  return { type: OPEN }
}

export const closeModal = createAction(CLOSE)
