import get from 'lodash/get'
import { Select } from 'types'

export const isCrudClient: Select<boolean> = ({ api }) => get(api, 'crud.client')
export const isCrudUser: Select<boolean> = ({ api }) => get(api, 'crud.user')
export const isFetchingClients: Select<boolean> = ({ api }) => get(api, 'fetch.client')
export const isFetchingUsers: Select<boolean> = ({ api }) => get(api, 'fetch.user')
