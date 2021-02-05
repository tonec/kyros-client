declare module 'redux-persist-cookie-storage'
declare module 'redial'
declare module 'helmet'
declare module '@loadable/server'

declare let __CLIENT__: boolean
declare let __SERVER__: boolean
declare let __DEVELOPMENT__: boolean

type StateType<TReducerOrMap extends any> = TReducerOrMap extends Reducer<any, any>
  ? ReturnType<TReducerOrMap>
  : TReducerOrMap extends Record<any, any>
  ? { [K in keyof TReducerOrMap]: StateType<TReducerOrMap[K]> }
  : never
