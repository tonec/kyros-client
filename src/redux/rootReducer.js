import { connectRouter } from 'connected-react-router'
import auth from './modules/auth/reducer'
import app from './modules/app/reducer'
import entity from './modules/entity/reducer'
import flash from './modules/flash/reducer'
import user from './modules/user/reducer'

export default history => ({
  router: connectRouter(history),
  auth,
  app,
  entity,
  flash,
  user,
})
