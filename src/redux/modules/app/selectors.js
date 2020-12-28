import get from 'lodash/get'

export const getIsFirstLoad = ({ app }) => app.isFirstLoad

export const getIsLoginDataFetched = ({ app }) => app.loginDataFetched

export const getQuery = ({ router }) => get(router, 'location.query')

export const getPathHistory = ({ app }) => app.pathHistory

export const getPreviousPath = ({ app }) => app.previousPath
