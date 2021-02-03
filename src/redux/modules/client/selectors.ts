import { createSelector } from 'reselect'
import { Client, Select } from 'types'
import get from 'lodash/get'
import { RootState } from 'redux/rootReducer'
import { EntityStore } from '../entity/reducer'

export const visibleClients: Select<string[]> = ({ client }) => client.visibleClients
export const clientEntities: Select<EntityStore<Client>> = ({ entity }) => entity.client

export const getAllClients = createSelector([clientEntities], clientEntities => {
  return (get(clientEntities, 'allIds', []) as string[]).map(id =>
    get(clientEntities, `byId[${id}]`),
  )
})

export const getClient = createSelector(
  [clientEntities, (state: RootState, props: { clientId: string }) => props.clientId],
  (clientEntities, clientId) => {
    if (!clientId || !clientEntities) return null
    return clientEntities.byId[clientId]
  },
)

export const getVisibleClients = createSelector(
  [visibleClients, clientEntities],
  (visibleClients, clientEntities) => {
    if (!visibleClients) return []
    return visibleClients.map(id => get(clientEntities, `byId[${id}]`))
  },
)
