/* eslint-disable no-console */
import { closeModal as closeModalQS } from 'helpers/modalQS'
import { showSuccess, showError } from 'redux/modules/flash/actions'
import { closeModal as closeModalAction } from 'redux/modules/modal/actions'
import { received } from 'redux/modules/app/actions'
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { History } from 'history'
import { Middleware } from 'redux'

type Props = {
  client: AxiosInstance
  history: History
}

export default ({ client, history }: Props): Middleware => {
  const middleware: Middleware = ({ dispatch, getState }) => next => action => {
    // Is thunk
    if (typeof action === 'function') {
      return action({ history, dispatch, getState })
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
      closeModal,
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
      dispatch,
      getState,
    })

    // Dispatch appropriate SUCCESS or FAIL action depending on
    //  whether action promise is resolved/value is returned or rejected
    actionPromise
      .then(
        (payload: AxiosResponse) => {
          next(received(payload))

          next({
            type: SUCCESS,
            payload: { ...inject, ...payload },
          })

          if (flash.success) {
            next(showSuccess(flash.success))
          }

          if (closeModal) {
            closeModalQS()
            next(closeModalAction())
          }
        },

        (error: AxiosError) => {
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
        },
      )
      .catch((error: AxiosError) => {
        console.log('MIDDLEWARE ERROR: ', error)
        next({ type: FAIL, payload: { ...inject, ...error }, error: true })
      })

    return actionPromise.catch((error: PromiseRejectedResult) =>
      console.log('API error: ', error),
    )
  }

  return middleware
}
