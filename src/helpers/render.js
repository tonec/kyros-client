import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ChunkExtractor } from '@loadable/server'
import serialize from 'serialize-javascript'
import { HelmetProvider } from 'react-helmet-async'
import theme from 'theme'
import { AsyncTrigger } from 'components'
import routes from '../routes'
import Html from './Html'

export default (req, store, history, routerContext) => {
  if (!req) return Html({})

  const sheets = new ServerStyleSheets()

  const statsFile = path.resolve(
    __dirname,
    '../public/dist/loadable-stats.json',
  )
  const extractor = new ChunkExtractor({ statsFile })
  const helmetContext = {}

  const jsx = extractor.collectChunks(
    sheets.collect(
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={history.location} context={routerContext}>
            <CssBaseline />
            <AsyncTrigger routes={routes} store={store}>
              <ThemeProvider theme={theme}>
                {renderRoutes(routes)}
              </ThemeProvider>
            </AsyncTrigger>
          </StaticRouter>
        </HelmetProvider>
      </Provider>,
    ),
  )

  const content = renderToString(jsx)
  const styles = sheets.toString()
  const links = extractor.getLinkTags()
  const scripts = extractor.getScriptTags()
  const initialState = serialize(store.getState())
  const { helmet } = helmetContext

  return Html({ content, links, styles, scripts, initialState, helmet })
}
