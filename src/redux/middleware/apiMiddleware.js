/* eslint-disable no-console */
import { showSuccess, showError } from 'redux/modules/flash/actions'

export default ({ client, history, match, params }) => {
  return ({ dispatch, getState }) => next => action => {
    // Is thunk
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    const {
      request,
      types,
      shouldRequest = () => true,
      inject = {},
      flash = {
        success: false,
        error: undefined,
      },
    } = action

    // Is normal action
    if (!request) {
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of 3 string types.')
    }

    if (typeof request !== 'function') {
      throw new Error('Expected request to be a function.')
    }

    if (!shouldRequest(getState())) {
      return null
    }

    // Is async
    const [REQUEST, SUCCESS, FAIL] = types

    // async action started
    next({ type: REQUEST, ...inject })

    // Inject helpers (eg. apiClient as client) and dispatch to action promise
    const actionPromise = request({
      client,
      history,
      match,
      params,
      dispatch,
      getState,
    })

    // Dispatch appropriate SUCCESS or FAIL action depending on
    //  whether action promise is resolved/value is returned or rejected
    actionPromise
      .then(
        payload => {
          next({
            type: SUCCESS,
            payload: { ...inject, ...payload },
          })

          if (flash.success) {
            next(showSuccess(flash.success))
          }
        },

        error => {
          next({
            type: FAIL,
            payload: { ...inject, ...error },
            error: true,
          })

          if (flash.error === undefined) {
            next(showError(error.message))
          }

          if (flash.error) {
            next(showError(flash.error))
          }

          console.error('API error: ', error)
        },
      )
      .catch(error => {
        console.error('MIDDLEWARE ERROR: ', error)
        next({ type: FAIL, payload: { ...inject, ...error }, error: true })
      })

    return actionPromise
  }
}
