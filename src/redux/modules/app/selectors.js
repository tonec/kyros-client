import get from 'lodash/get'

export const getAppLoaded = ({ app }) => app.appLoaded

export const getQuery = ({ router }) => get(router, 'location.query')

export const getPathHistory = ({ app }) => app.pathHistory

export const getPreviousPath = ({ app }) => app.previousPath
