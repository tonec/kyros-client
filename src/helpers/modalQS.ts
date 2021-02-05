import { MODAL_QUERY_PARAMS } from 'utils/constants'
import { add, remove } from 'utils/qs'

export function openModal(modalKey: string, state = {}): void {
  const queryStringObject: { [k: string]: any } = { modalKey }

  if (state) {
    queryStringObject.modalState = state
  }

  add(queryStringObject)
}

export function closeModal(): void {
  remove(MODAL_QUERY_PARAMS)
}
