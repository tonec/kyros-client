import App from 'App'
import { AuthRedirect, NotFound, PrivateRoute } from 'components'
import Login from 'features/Auth/Login'
import Users from 'features/Users/Users'
import Clients from 'features/Clients/Clients'
import Schedule from 'features/Schedule/Schedule'
import FormLibrary from 'features/Library/Form'

export default [
  {
    component: App,
    routes: [
      { path: '/login', component: AuthRedirect(Login) },
      { path: '/client/:clientId/schedule', component: PrivateRoute(Schedule) },
      { path: '/client/:clientId/people', component: PrivateRoute(Users) },
      { path: '/client/:clientId/reports', component: PrivateRoute(Users) },
      { path: '/client/:clientId', component: PrivateRoute(Schedule) },
      { path: '/clients', component: PrivateRoute(Clients) },
      { path: '/form', component: FormLibrary },
      { path: '/', exact: true, component: AuthRedirect(Login) },
      { component: NotFound },
    ],
  },
]
