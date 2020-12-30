import { createSelector } from 'reselect'
import get from 'lodash/get'

export const isFetching = ({ user }) => user.fetching
export const visibleUsers = ({ user }) => user.visibleUsers
export const userEntities = ({ entity }) => entity.user

export const getAllUsers = createSelector([userEntities], userEntities =>
  get(userEntities, 'allIds', []).map(id => get(userEntities, `byId[${id}]`)),
)

export const getUser = (state, id) => {
  return getAllUsers(state).filter(user => user.id === id)[0]
}

export const getVisibleUsers = createSelector(
  [visibleUsers, userEntities],
  (visibleUsers, userEntities) =>
    visibleUsers.map(id => get(userEntities, `byId[${id}]`)),
)
