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
import { trigger } from 'redial'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@material-ui/core/styles'
import createStore from 'redux/store'
import asyncMatchRoutes from 'helpers/asyncMatchRoutes'
import { AsyncConnect } from 'components'
import theme from 'theme'
import routes from './routes'

window.addEventListener('unhandledrejection', (err, promise) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled promise rejection: ', err, promise)
})

const history = qhistory(createBrowserHistory(), stringify, parse)

const hydrate = async () => {
  const { components, match, params } = await asyncMatchRoutes(
    routes,
    history.location.pathname,
  )
  const store = createStore({ history, match, params })

  const locals = {
    history,
    store,
    match,
    params,
    location: history.location,
  }

  if (window.INITIAL_STATE) {
    delete window.INITIAL_STATE
  } else {
    trigger('fetch', components, locals)
  }

  trigger('defer', components, locals)

  ReactDOM.hydrate(
    <Provider store={store}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          <AsyncConnect routes={routes} store={store}>
            <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
          </AsyncConnect>
        </ConnectedRouter>
      </HelmetProvider>
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
