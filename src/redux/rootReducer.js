import { connectRouter } from 'connected-react-router'
import api from './modules/api/reducer'
import app from './modules/app/reducer'
import auth from './modules/auth/reducer'
import entity from './modules/entity/reducer'
import fetch from './modules/fetch/reducer'
import flash from './modules/flash/reducer'
import user from './modules/user/reducer'

export default history => ({
  router: connectRouter(history),
  api,
  app,
  auth,
  entity,
  fetch,
  flash,
  user,
})
