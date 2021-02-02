import get from 'lodash/get'
import { Obj } from 'types'
import { RootState } from 'redux/rootReducer'

export const getIsFirstLoad = ({ app }: RootState): boolean => app.isFirstLoad

export const getQuery = ({ router }: RootState): Obj<any> =>
  get(router, 'location.query')

export const getPathHistory = ({ app }: RootState): Obj<any>[] =>
  app.pathHistory

export const getPreviousPath = ({ app }: RootState): Obj<any> =>
  app.previousPath
