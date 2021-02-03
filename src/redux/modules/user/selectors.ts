import { createSelector } from 'reselect'
import { Select, User } from 'types'
import get from 'lodash/get'
import { RootState } from 'redux/rootReducer'
import { EntityStore } from '../entity/reducer'

export const visibleUsers: Select<string[]> = ({ user }) => user.visibleUsers
export const userEntities: Select<EntityStore<User>> = ({ entity }) => entity.user

export const getAllUsers = createSelector([userEntities], userEntities =>
  (get(userEntities, 'allIds', []) as string[]).map(id => get(userEntities, `byId[${id}]`)),
)

export const getUser = createSelector(
  [userEntities, (state: RootState, props: { userId: string }) => props.userId],
  (userEntities, userId) => {
    if (!userId || !userEntities) return null
    return userEntities.byId[userId]
  },
)

export const getVisibleUsers = createSelector(
  [visibleUsers, userEntities],
  (visibleUsers, userEntities) => {
    if (!visibleUsers) return []
    return visibleUsers.map(id => get(userEntities, `byId[${id}]`))
  },
)
