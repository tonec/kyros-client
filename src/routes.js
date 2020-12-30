import App from 'App'
import { AuthRedirect, NotFound, PrivateRoute } from 'components'
import Home from 'features/Home/Home'
import Login from 'features/Auth/Login'
import Users from 'features/Users/Users'
import FormLibrary from 'features/Library/Form'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: AuthRedirect(Login) },
      { path: '/login', component: AuthRedirect(Login) },
      { path: '/home', component: PrivateRoute(Home) },
      { path: '/users', component: PrivateRoute(Users) },
      { path: '/form', component: FormLibrary },
      { component: NotFound },
    ],
  },
]
