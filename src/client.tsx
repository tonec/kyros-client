/* eslint-disable @typescript-eslint/no-explicit-any */
///<reference types="webpack-env" />
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { loadableReady } from '@loadable/component'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { getStoredState } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import { trigger } from 'redial'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import NProgress from 'nprogress'
import createStore from './redux/store'
import asyncMatchRoutes from './helpers/asyncMatchRoutes'
import apiClient from './helpers/apiClient'
import history from './utils/history'
import { AsyncTrigger } from './components'
import theme from './theme'
import routes from './routes'

declare const window: any

window.onunhandledrejection = (event: PromiseRejectionEvent) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`)
}

const client = apiClient()

const persistConfig = {
  key: 'kyros',
  storage: new CookieStorage(Cookies),
  stateReconciler(inboundState: any, originalState: any) {
    return originalState
  },
  whitelist: ['auth'],
}

;(async () => {
  const preloadedState = await getStoredState(persistConfig)

  const store = createStore({
    client,
    history,
    data: { ...preloadedState, ...window.INITIAL_STATE },
    persistConfig,
  })

  const triggerHooks = async (routes: RouteConfig[], pathname: string) => {
    NProgress.start()

    const { components, match, params } = await asyncMatchRoutes(routes, pathname)

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
      try {
        await trigger('fetch', components, locals)
      } catch (error) {
        // Failed fetch requests should be logged via redux actions
        // console.log(error)
      }
    }

    try {
      await trigger('defer', components, locals)
    } catch (error) {
      // Failed defer requests should be logged via redux actions
      // console.log(error)
    }

    NProgress.done()
  }

  const hydrate = async () => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <HelmetProvider>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <AsyncTrigger trigger={(pathname: string) => triggerHooks(routes, pathname)}>
                {renderRoutes(routes)}
              </AsyncTrigger>
            </ThemeProvider>
          </HelmetProvider>
        </ConnectedRouter>
      </Provider>,
      document.getElementById('content'),
    )
  }

  loadableReady(() => {
    hydrate()
  })

  if (module.hot) {
    module.hot.accept('./routes', () => {
      hydrate()
    })
  }
})()
