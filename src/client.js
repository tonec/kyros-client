import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { loadableReady } from '@loadable/component'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { getStoredState } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import { trigger } from 'redial'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import createStore from 'redux/store'
import asyncMatchRoutes from 'helpers/asyncMatchRoutes'
import apiClient from 'helpers/apiClient'
import { AsyncTrigger } from 'components'
import theme from 'theme'
import routes from './routes'

window.addEventListener('unhandledrejection', (err, promise) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled promise rejection: ', err, promise)
})

const history = qhistory(createBrowserHistory(), stringify, parse)
const client = apiClient()

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  stateReconciler(inboundState, originalState) {
    return originalState
  },
  whitelist: ['auth'],
}

const hydrate = async () => {
  const preloadedState = await getStoredState(persistConfig)

  const { components, match, params } = await asyncMatchRoutes(
    routes,
    history.location.pathname,
  )
  const store = createStore({
    client,
    history,
    match,
    params,
    data: { ...preloadedState, ...window.INITIAL_STATE },
    persistConfig,
  })

  const locals = {
    history,
    store,
    match,
    params,
    location: history.location,
  }

  if (window.PRELOADED) {
    delete window.PRELOADED
  } else {
    trigger('fetch', components, locals)
  }

  trigger('defer', components, locals)

  ReactDOM.hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <CssBaseline />
          <AsyncTrigger routes={routes} store={store}>
            <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
          </AsyncTrigger>
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('content'),
  )
}

loadableReady(() => {
  hydrate()
})

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./routes', () => {
    hydrate()
  })
}
