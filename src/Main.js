import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'theme'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
}

export default Main
