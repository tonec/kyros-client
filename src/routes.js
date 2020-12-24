import App from 'App'
// import { NotFound } from 'components'
// import Home from 'views/Home/Home'
import Login from 'views/Auth/Login'
import Users from 'views/Users/UsersLoadable'
import FormLibrary from 'views/Library/Form'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Login },
      // { path: '/login', component: Login },
      { path: '/users', component: Users },
      { path: '/form', component: FormLibrary },
      // { component: NotFound },
    ],
  },
]
