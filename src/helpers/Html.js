import registerSW from './registerSW'

export default ({
  content = '',
  links = '',
  styles = '',
  scripts = '',
  initialState = '',
  helmet
}) => {
  return `
    <!DOCTYPE html>
    <style>
      body { margin: 0; height: 100vh; }
    </style>
    <html lang="en-US">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        ${process.env.NODE_ENV !== 'development' ? registerSW() : ''}
        ${links}
        ${styles}
      </head>
      <body>
        <div id="content">${content}</div>
        ${initialState && `<script>window.INITIAL_STATE = ${initialState}</script>`}
        ${scripts}
      </body>
    </html>
  `
}
