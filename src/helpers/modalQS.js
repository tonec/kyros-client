import { MODAL_QUERY_PARAMS } from 'utils/constants'
import { add, remove } from 'utils/qs'

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
