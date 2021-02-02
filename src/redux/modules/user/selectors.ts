import { createSelector, Selector } from 'reselect'
import get from 'lodash/get'
import { User } from 'types/entity'
import { RootState } from 'redux/rootReducer'
import { EntityStore } from '../entity/reducer'

export const visibleUsers = ({ user }: RootState): string[] => user.visibleUsers

export const userEntities = ({ entity }: RootState): EntityStore<User> =>
  entity.user

export const getAllUsers: Selector<RootState, User[]> = createSelector(
  [userEntities],
  userEntities =>
    (get(userEntities, 'allIds', []) as string[]).map(id =>
      get(userEntities, `byId[${id}]`),
    ),
)

export const getUser = (state: RootState, id: string): User | null => {
  if (!id) return null
  return userEntities(state).byId[id]
}

export const getVisibleUsers: Selector<RootState, User[]> = createSelector(
  [visibleUsers, userEntities],
  (visibleUsers, userEntities) => {
    if (!visibleUsers) return []
    return visibleUsers.map(id => get(userEntities, `byId[${id}]`))
  },
)
