import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { loadableReady } from '@loadable/component'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import { HelmetProvider } from 'react-helmet-async'
import createStore from 'redux/store'
import routes from './routes'

window.addEventListener('unhandledrejection', (err, promise) => {
  console.log('Unhandled promise rejection: ', err, promise)
})

const history = qhistory(createBrowserHistory(), stringify, parse)
const store = createStore(history)

const hydrate = () => {
  history.listen(location => {
    const branch = matchRoutes(routes, location.pathname)
    const components = branch.map(b => b.route.component)
    const locals = { store }

    if (window.INITIAL_STATE) {
      delete window.INITIAL_STATE
    } else {
      trigger('fetch', components, locals)
    }

    trigger('defer', components, locals)
  })

  ReactDOM.hydrate(
    <Provider store={store}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </HelmetProvider>
    </Provider>,
    document.getElementById('content')
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
