import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default history => {
  let composeEnhancers = compose
  let initialState = {}

  if (__CLIENT__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    initialState = window.INITIAL_STATE
    delete window.INITIAL_STATE
  }

  const middleware = [
    thunk,
    routerMiddleware(history)
  ]

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
}
