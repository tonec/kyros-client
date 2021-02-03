import { Select, Obj } from 'types'

export const getModalKey: Select<string> = ({ modal }) => modal.modalKey
export const getModalState: Select<Obj<any>> = ({ modal }) => modal.modalState
