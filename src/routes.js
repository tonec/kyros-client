import App from 'App'
import { NotFound } from 'components'
import { Home, Users } from 'containers'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/users', component: Users },
      { component: NotFound }
    ]
  }
]
