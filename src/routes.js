import App from 'App'
import { NotFound, PrivateRoute } from 'components'
// import Home from 'views/Home/Home'
import Login from 'features/Auth/Login'
import Users from 'features/Users/Users'
import FormLibrary from 'features/Library/Form'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Login },
      { path: '/login', component: Login },
      { path: '/users', component: PrivateRoute(Users), loadData: 'asaas' },
      { path: '/form', component: FormLibrary },
      { component: NotFound },
    ],
  },
]
