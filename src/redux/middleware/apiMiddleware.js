export default ({ history, match, params }) => {
  return ({ dispatch, getState }) => next => action => {
    // Is thunk
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    const { promise, types, ...rest } = action

    // Is plain object
    if (!promise) {
      return next(action)
    }

    // Is async
    const [REQUEST, SUCCESS, FAILURE] = types

    // async action started
    next({ ...rest, type: REQUEST })

    // Inject helpers (eg. apiClient as client) and dispatch to action promise
    const actionPromise = promise({
      history,
      match,
      params,
      dispatch,
      getState
    })

    // Dispatch appropriate SUCCESS or FAIL action depending on
    //  whether action promise is resolved/value is returned or rejected
    actionPromise
      .then(payload => next({
        ...rest, payload, type: SUCCESS
      }), () => next({
        ...rest, type: FAILURE
      }))
      .catch(error => {
        console.error('MIDDLEWARE ERROR:', error)
        next({ ...rest, error, type: FAILURE })
      })

    return actionPromise
  }
}
