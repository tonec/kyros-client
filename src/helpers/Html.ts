import { HelmetData } from 'react-helmet-async'
import registerSW from './registerSW'

type HtmlArgs = {
  content?: string
  links?: string
  styles?: string
  scripts?: string
  initialState?: string
  helmet?: HelmetData
}

export default function ({
  content = '',
  links = '',
  styles = '',
  scripts = '',
  initialState = '',
  helmet,
}: HtmlArgs): string {
  return `
    <!DOCTYPE html>
    <style>
      html, body, #content { height: 100%; margin: 0; }
    </style>
    <html lang="en-US">
      <head>
        ${helmet && helmet.title.toString()}
        ${helmet && helmet.meta.toString()}
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        ${process.env.NODE_ENV !== 'development' ? registerSW() : ''}
        ${links}
        <link rel="stylesheet" href="/dist/main.css" />
        <style id="jss-server-side">${styles}</style>
      </head>
      <body>
        <div id="content">${content}</div>
        ${
          initialState &&
          `<script>window.PRELOADED=true;window.INITIAL_STATE = ${initialState}</script>`
        }
        ${scripts}
      </body>
    </html>
  `
}
