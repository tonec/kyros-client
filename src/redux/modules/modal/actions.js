import { addQS, removeQS } from 'utils'
import { MODAL_QUERY_PARAMS } from 'utils/constants'

/*
 * Actions
 * * * * */

const prefix = '@modal'

export const OPEN = `${prefix}/OPEN`
export const CLOSE = `${prefix}/CLOSE`

/*
 * Action creators
 * * * * * * * * */

export function openModal(modalKey, { state, useQS = true } = {}) {
  return ({ dispatch }) => {
    if (useQS) {
      const queryStringObject = { modalKey }

      if (state) {
        queryStringObject.modalState = state
      }

      addQS(dispatch, queryStringObject)
    }

    return dispatch({
      type: OPEN,
      payload: {
        modalKey,
        modalState: state,
      },
    })
  }
}

export function closeModal(useQS = true) {
  return ({ dispatch }) => {
    if (useQS) {
      removeQS(dispatch, MODAL_QUERY_PARAMS)
    }

    return dispatch({
      type: CLOSE,
    })
  }
}
