import { createSelector } from 'reselect'
import get from 'lodash/get'

export const visibleUsers = ({ user }) => user.visibleUsers
export const userEntities = ({ entity }) => entity.user

export const getAllUsers = createSelector([userEntities], userEntities =>
  get(userEntities, 'allIds', []).map(id => get(userEntities, `byId[${id}]`)),
)

export const getUser = (state, id) => {
  if (!id) return null
  return userEntities(state).byId[id]
}

export const getVisibleUsers = createSelector(
  [visibleUsers, userEntities],
  (visibleUsers, userEntities) => {
    if (!visibleUsers) return []
    return visibleUsers.map(id => get(userEntities, `byId[${id}]`))
  },
)
