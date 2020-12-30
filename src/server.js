import 'babel-polyfill'
import path from 'path'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import favicon from 'serve-favicon'
import { createMemoryHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { trigger } from 'redial'
import PrettyError from 'pretty-error'
import { getStoredState } from 'redux-persist'
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage'
import Cookies from 'utils/nodeCookies'
import asyncMatchRoutes from 'helpers/asyncMatchRoutes'
import apiClient from 'helpers/apiClient'
import render from 'helpers/render'
import createStore from 'redux/store'
import routes from './routes'
import config from '../config'

const PUBLIC_PATH = path.resolve(__dirname, '../public')
const FAVICON = path.join(PUBLIC_PATH, 'favicon.ico')
const MANIFEST = path.join(PUBLIC_PATH, 'manifest.json')

const app = express()
const pretty = new PrettyError()

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled Rejection at: Promise ', p, pretty.render(reason))
})

app
  .use(helmet())
  .use(cookieParser())
  .use(compression())
  .use(favicon(FAVICON))
  .use('/manifest.json', (req, res) => res.sendFile(MANIFEST))

app.use(express.static('public'))

app.use('/app-shell', (req, res) => {
  res.send(render())
})

app.get('*', async (req, res) => {
  const cookieJar = new NodeCookiesWrapper(new Cookies(req, res))
  const client = apiClient(req)

  const persistConfig = {
    key: 'root',
    storage: new CookieStorage(cookieJar),
    stateReconciler: (inboundState, originalState) => originalState,
    whitelist: ['auth'],
  }

  let preloadedState

  try {
    preloadedState = await getStoredState(persistConfig)
  } catch (e) {
    preloadedState = {}
  }

  const memHistory = createMemoryHistory({ initialEntries: [req.originalUrl] })
  const history = qhistory(memHistory, stringify, parse)
  const { components, match, params } = await asyncMatchRoutes(routes, req.path)

  const store = createStore({
    client,
    history,
    match,
    params,
    data: preloadedState,
    persistConfig,
  })

  const locals = {
    history,
    store,
    match,
    params,
  }

  try {
    await trigger('fetch', components, locals)
  } catch (error) {
    // Failed fetch requests should be logged via redux actions
    // console.log(error)
  }

  const context = {}
  const content = render({ req, store, history, context })

  if (context.url) {
    res.redirect(301, `${context.url}?redirect=${context.location.state.from}`)
    return
  }

  if (context.statusCode) {
    res.status(context.statusCode)
  }

  res.send(content)
})

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${config.PORT}`)
})
