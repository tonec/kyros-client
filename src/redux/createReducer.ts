import { AnyAction } from 'redux'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createReducer<T>(initialState: T, handlers: any) {
  return function reducer(state = initialState, action: AnyAction): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
