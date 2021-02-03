import get from 'lodash/get'
import { ParsedQs } from 'qs'
import { Select } from 'types'
import { Location } from 'history'

export const getIsFirstLoad: Select<boolean> = ({ app }) => app.isFirstLoad
export const getQuery: Select<ParsedQs> = ({ router }) => get(router, 'location.query')
export const getPathHistory: Select<Location[]> = ({ app }) => app.pathHistory
export const getPreviousPath: Select<Location | null> = ({ app }) => app.previousPath
