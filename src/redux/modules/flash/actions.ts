import { AnyAction, createAction } from '@reduxjs/toolkit'
import { Status } from 'types'

/*
 * Actions
 * * * * */

const prefix = '@flash'

export const SHOW = `${prefix}/SHOW`
export const HIDE = `${prefix}/HIDE`

/*
 * Action creators
 * * * * * * * * */

interface Flash {
  status: Status
  message: string
  dismissable?: boolean
  timeout?: number
}

export function showFlash({ status, message, dismissable, timeout }: Flash): AnyAction {
  return { type: SHOW, status, message, dismissable, timeout }
}

export function showError(message: string): AnyAction {
  return showFlash({ status: 'error', message, dismissable: true })
}

export function showSuccess(message: string): AnyAction {
  return showFlash({
    status: 'success',
    message,
    dismissable: false,
    timeout: 2000,
  })
}

export const hideFlash = createAction(HIDE)
