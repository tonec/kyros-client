import { createSelector } from 'reselect'
import get from 'lodash/get'

export const visibleClients = ({ client }) => client.visibleClients
export const clientEntities = ({ entity }) => entity.client

export const getAllClients = createSelector([clientEntities], clientEntities =>
  get(clientEntities, 'allIds', []).map(id =>
    get(clientEntities, `byId[${id}]`),
  ),
)

export const getClient = (state, id) => {
  return clientEntities(state).byId[id]
}

export const getVisibleClients = createSelector(
  [visibleClients, clientEntities],
  (visibleClients, clientEntities) =>
    visibleClients.map(id => get(clientEntities, `byId[${id}]`)),
)
