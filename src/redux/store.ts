/* eslint-disable global-require */
import { createStore, applyMiddleware, compose, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createPersistoid, PersistConfig } from 'redux-persist'
import { AxiosInstance } from 'axios'
import apiMiddleware from './middleware/apiMiddleware'
import rootReducer, { RootState } from './rootReducer'
import { History } from 'history'

declare const window: any

type Props = {
  client: AxiosInstance
  history: History<unknown>
  data: RootState
  persistConfig: PersistConfig<any>
}

export default ({ client, history, data, persistConfig }: Props): Store => {
  let composeEnhancers = compose

  let initialState = { ...data }

  if (__CLIENT__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    initialState = { ...initialState, ...window.INITIAL_STATE }
    delete window.INITIAL_STATE
  }

  const middleware = [apiMiddleware({ client, history }), routerMiddleware(history)]

  const store = createStore(
    rootReducer(persistConfig, history),
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
