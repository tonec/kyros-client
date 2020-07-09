import 'babel-polyfill'
import path from 'path'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import favicon from 'serve-favicon'
import { matchRoutes } from 'react-router-config'
import { createMemoryHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { trigger } from 'redial'
import PrettyError from 'pretty-error'
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
  console.error('Unhandled Rejection at: Promise ', p, pretty.render(reason))
})

app.use(helmet())
  .use(cookieParser())
  .use(compression())
  .use(favicon(FAVICON))
  .use('/manifest.json', (req, res) => res.sendFile(MANIFEST))

app.use(express.static('public'))

app.use('/app-shell', (req, res) => {
  res.send(render())
})


app.get('*', (req, res) => {
  const history = qhistory(createMemoryHistory({ initialEntries: [req.originalUrl] }), stringify, parse)
  const store = createStore(history)
  const branch = matchRoutes(routes, req.path)
  const components = branch.map(b => b.route.component)
  const locals = { store }

  trigger('fetch', components, locals).then(() => {
    const routerContext = {}
    const appContent = render(req, store, routerContext)

    if (routerContext.notFound) {
      res.status(404)
    }

    res.send(appContent)
  })
})

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`)
})
