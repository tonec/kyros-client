import App from 'App'
import { NotFound } from 'components'
import { Home, Login, Users } from 'views'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/login', component: Login },
      { path: '/users', component: Users },
      { path: '/clients', component: Users },
      { path: '/sometheing', component: Users },
      { component: NotFound }
    ]
  }
]
