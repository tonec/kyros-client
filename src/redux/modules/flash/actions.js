import { createAction } from '@reduxjs/toolkit'

/*
 * Actions
 * * * * */

const prefix = '@flash'

export const SHOW = `${prefix}/SHOW`
export const HIDE = `${prefix}/HIDE`

/*
 * Action creators
 * * * * * * * * */

export function showFlash({ status, message, dismissable, timeout }) {
  return { type: SHOW, status, message, dismissable, timeout }
}

export function showError(message) {
  return showFlash({ status: 'error', message, dismissable: true })
}

export function showSuccess(message) {
  return showFlash({
    status: 'success',
    message,
    dismissable: false,
    timeout: 2000,
  })
}

export const hideFlash = createAction(HIDE)
