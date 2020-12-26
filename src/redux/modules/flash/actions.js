/*
 * Actions
 * * * * */

const prefix = '@flash'

export const SHOW = `${prefix}/SHOW`
export const HIDE = `${prefix}/HIDE`

/*
 * Action creators
 * * * * * * * * */

export function showFlash(status, message, dismissable, timeout) {
  return {
    type: SHOW,
    status,
    message,
    dismissable,
    timeout,
  }
}

export function showError(message) {
  return showFlash('error', message, true)
}

export function showSuccess(message) {
  return showFlash('success', message, false, 2000)
}

export function hideFlash() {
  return {
    type: HIDE,
  }
}
