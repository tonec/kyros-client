import get from 'lodash/get'

export const isCreatingClient = ({ api }) => get(api, 'create.client')
export const isCreatingUser = ({ api }) => get(api, 'create.user')

export const isFetchingClients = ({ api }) => get(api, 'fetch.client')
export const isFetchingUsers = ({ api }) => get(api, 'fetch.user')
