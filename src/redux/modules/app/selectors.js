import get from 'lodash/get'

export const getQuery = ({ router }) => get(router, 'location.query')

export const getQueryValueByKey = ({ router }, queryKey) => get(router, `location.query[${queryKey}]`)

export const getPathHistory = ({ app }) => app.pathHistory

export const getPreviousPath = ({ app }) => app.previousPath
