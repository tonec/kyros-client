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
import PrettyError, { ParsedError } from 'pretty-error'
import { getStoredState } from 'redux-persist'
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage'
import Cookies from 'cookies'
import asyncMatchRoutes from 'helpers/asyncMatchRoutes'
import apiClient from 'helpers/apiClient'
import render from 'helpers/render'
import createStore from 'redux/store'
import routes from './routes'
import config from '../config'
import { RootState } from 'redux/rootReducer'

const PUBLIC_PATH = path.resolve(__dirname, '../public')
const FAVICON = path.join(PUBLIC_PATH, 'favicon.ico')
const MANIFEST = path.join(PUBLIC_PATH, 'manifest.json')

const app = express()
const pretty = new PrettyError()

process.on('unhandledRejection', (reason: ParsedError, p) => {
  console.error('Unhandled Rejection at: Promise ', p, pretty.render(reason))
})

app
  .use(helmet())
  .use(cookieParser())
  .use(compression())
  .use(favicon(FAVICON))
  .use('/manifest.json', (req, res) => res.sendFile(MANIFEST))

app.use(express.static('public'))

// app.use('/app-shell', (req, res) => {
//   res.send(render())
// })

app.get('*', async (req, res) => {
  const cookieJar = new NodeCookiesWrapper(new Cookies(req, res)) as any
  const client = apiClient(req)

  const persistConfig = {
    key: 'kyros',
    storage: new CookieStorage(cookieJar, {
      setCookieOptions: { httpOnly: false },
    }),
    stateReconciler: (inboundState: any, originalState: any) => originalState,
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
    data: preloadedState as RootState,
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

  const routerContext: any = {}
  const content = render({ req, store, history, routerContext })

  if (routerContext.url && routerContext.location) {
    res.redirect(301, `${routerContext.url}?redirect=${routerContext.location.state.from}`)
    return
  }

  if (routerContext.statusCode) {
    res.status(routerContext.statusCode)
  }

  res.send(content)
})

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`)
})
