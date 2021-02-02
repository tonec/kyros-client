import { connectRouter } from 'connected-react-router'
import { combineReducers } from '@reduxjs/toolkit'
import { History } from 'history'
import api from './modules/api/reducer'
import app from './modules/app/reducer'
import auth from './modules/auth/reducer'
import client from './modules/client/reducer'
import entity from './modules/entity/reducer'
import flash from './modules/flash/reducer'
import modal from './modules/modal/reducer'
import user from './modules/user/reducer'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (history: History) =>
  combineReducers({
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

export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
