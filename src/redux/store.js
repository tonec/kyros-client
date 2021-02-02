/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistCombineReducers, createPersistoid } from 'redux-persist'
import apiMiddleware from './middleware/apiMiddleware'
import rootReducer from './rootReducer'

export default ({ client, history, match, params, data, persistConfig }) => {
  let composeEnhancers = compose

  let initialState = { ...data }

  if (__CLIENT__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    initialState = { ...initialState, ...window.INITIAL_STATE }
    delete window.INITIAL_STATE
  }

  const middleware = [
    apiMiddleware({ client, history, match, params }),
    routerMiddleware(history),
  ]

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  )

  if (persistConfig) {
    const persistoid = createPersistoid(persistConfig)
    store.subscribe(() => {
      persistoid.update(store.getState())
    })
  }

  return store
}
