import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import apiMiddleware from './middleware/apiMiddleware'
import rootReducer from './rootReducer'

export default ({ history, match, params }) => {
  let composeEnhancers = compose
  let initialState = {}

  if (__CLIENT__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    initialState = window.INITIAL_STATE
    delete window.INITIAL_STATE
  }

  const middleware = [
    apiMiddleware({ history, match, params }),
    routerMiddleware(history)
  ]

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
}
