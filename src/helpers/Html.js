import registerSW from './registerSW'

export default function ({
  content = '',
  links = '',
  styles = '',
  scripts = '',
  initialState = '',
  helmet,
}) {
  return `
    <!DOCTYPE html>
    <style>
      html, body, #content { height: 100%; margin: 0; }
    </style>
    <html lang="en-US">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        ${process.env.NODE_ENV !== 'development' ? registerSW() : ''}
        ${links}
        <style id="jss-server-side">${styles}</style>
      </head>
      <body>
        <div id="content">${content}</div>
        ${
          initialState &&
          `<script>window.INITIAL_STATE = ${initialState}</script>`
        }
        ${scripts}
      </body>
    </html>
  `
}
