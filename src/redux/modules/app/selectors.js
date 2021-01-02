import get from 'lodash/get'

export const getIsFirstLoad = ({ app }) => app.isFirstLoad

export const getQuery = ({ router }) => get(router, 'location.query')

export const isConnecting = ({ api }) => api.connecting

export const isConnected = ({ api }) => api.connected

export const isOnline = ({ api }) => api.online

export const getPathHistory = ({ app }) => app.pathHistory

export const getPreviousPath = ({ app }) => app.previousPath
