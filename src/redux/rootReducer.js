import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import app from './modules/app/reducer'
import user from './modules/user/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  app,
  user
})
