const configApp = require('./config.app')
const env = require('./env')

const PUBLIC_PATH = `http://${env.HOST}:${+env.PORT}/dist/`

module.exports = {
  ...{
    HOST: env.HOST,
    PORT: env.PORT,
    app: configApp,
    paths: {
      PUBLIC: PUBLIC_PATH,
    },
    apiHost: 'kyros-app.com',
    apiPort: 8080,
  },
}
