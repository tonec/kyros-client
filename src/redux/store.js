import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { persistCombineReducers, createPersistoid } from 'redux-persist'
import apiMiddleware from './middleware/apiMiddleware'
import rootReducer from './rootReducer'

export default ({ client, history, match, params, data, persistConfig }) => {
  let preloadedState = { ...data }

  if (__CLIENT__) {
    preloadedState = { ...preloadedState, ...window.INITIAL_STATE }
    delete window.INITIAL_STATE
  }

  const middleware = getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['request'],
      },
    }).concat([
      apiMiddleware({ client, history, match, params }),
      routerMiddleware(history),
    ])

  const persisted = persistCombineReducers(persistConfig, rootReducer(history))

  const store = configureStore({
    reducer: persisted,
    middleware,
    preloadedState,
  })

  if (persistConfig) {
    const persistoid = createPersistoid(persistConfig)
    store.subscribe(() => {
      persistoid.update(store.getState())
    })
  }

  return store
}
