import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { persistCombineReducers, createPersistoid } from 'redux-persist'
import apiMiddleware from './middleware/apiMiddleware'
import rootReducer from './rootReducer'

export default ({ client, history, data, persistConfig }) => {
  let preloadedState = { ...data }

  if (__CLIENT__) {
    preloadedState = { ...preloadedState, ...window.INITIAL_STATE }
    delete window.INITIAL_STATE
  }

  const middleware = getDefaultMiddleware =>
    [apiMiddleware({ client, history }), routerMiddleware(history)].concat(
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActionPaths: ['request'],
        },
      }),
    )

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

  if (process.env.NODE_ENV === 'development') {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const reducer = require('./rootReducer').default
      const persisted = persistCombineReducers(persistConfig, reducer(history))
      store.replaceReducer(persisted)
    })
  }

  return store
}
