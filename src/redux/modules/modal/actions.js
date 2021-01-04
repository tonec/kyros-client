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

export function openModal(modalKey, { state, useRedux = false } = {}) {
  return ({ dispatch }) => {
    if (!useRedux) {
      const queryStringObject = { modalKey }

      if (state) {
        queryStringObject.modalState = state
      }

      return addQS(dispatch, queryStringObject)
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

export function closeModal(useRedux = false) {
  return ({ dispatch }) => {
    if (!useRedux) {
      return removeQS(dispatch, MODAL_QUERY_PARAMS)
    }

    return dispatch({
      type: CLOSE,
    })
  }
}
