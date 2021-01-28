import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import api from './modules/api/reducer'
import app from './modules/app/reducer'
import auth from './modules/auth/reducer'
import client from './modules/client/reducer'
import entity from './modules/entity/reducer'
import flash from './modules/flash/reducer'
import modal from './modules/modal/reducer'
import user from './modules/user/reducer'

export interface RootState {
  router: unknown
  api: typeof api
  app: typeof app
  auth: typeof auth
  client: typeof client
  entity: typeof entity
  flash: typeof flash
  modal: typeof modal
  user: typeof user
}

export default (history: History): RootState => ({
  router: connectRouter(history),
  api,
  app,
  auth,
  client,
  entity,
  flash,
  modal,
  user,
})
