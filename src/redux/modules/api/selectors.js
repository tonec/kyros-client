import get from 'lodash/get'

export const isCrudClient = ({ api }) => get(api, 'crud.client')
export const isCrudUser = ({ api }) => get(api, 'crud.user')

export const isFetchingClients = ({ api }) => get(api, 'fetch.client')
export const isFetchingUsers = ({ api }) => get(api, 'fetch.user')
