import App from 'App'
import { AuthRedirect, NotFound, PrivateRoute } from 'components'
import Login from 'features/Auth/Login'
import Users from 'features/Users'
import Clients from 'features/Clients'
import Schedule from 'features/Schedule'
import FormLibrary from 'features/Library/Form'
import TypeLibrary from 'features/Library/Type'

export default [
  {
    component: App,
    routes: [
      { path: '/login', component: AuthRedirect(Login) },
      { path: '/user/:userId/schedule', component: PrivateRoute(Schedule) },
      { path: '/client/:clientId/schedule', component: PrivateRoute(Schedule) },
      { path: '/client/:clientId/people', component: PrivateRoute(Users) },
      { path: '/client/:clientId/reports', component: PrivateRoute(Users) },
      { path: '/client/:clientId', component: PrivateRoute(Schedule) },
      { path: '/clients', component: PrivateRoute(Clients) },
      { path: '/form', component: FormLibrary },
      { path: '/type', component: TypeLibrary },
      { path: '/', exact: true, component: AuthRedirect(Login) },
      { component: NotFound },
    ],
  },
]
