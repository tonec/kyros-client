import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './modules/auth/reducer'
import flash from './modules/flash/reducer'
import user from './modules/user/reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    flash,
    user,
  })
