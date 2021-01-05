import { MODAL_QUERY_PARAMS } from './constants'
import { add, remove } from './qs'

export function openModal(modalKey, { state } = {}) {
  const queryStringObject = { modalKey }

  if (state) {
    queryStringObject.modalState = state
  }

  add(queryStringObject)
}

export function closeModal() {
  remove(MODAL_QUERY_PARAMS)
}
