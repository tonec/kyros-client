import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWith } from 'test/setupTests'
import Login from '..'

describe('Login', () => {
  it('dispatches correct actions on unsuccessful auth', async () => {
    const client = {
      post: () =>
        Promise.reject({ code: 'Unauthorized', message: 'User not found' }),
    }

    const { getByTestId, store } = renderWith(<Login />, { client })

    const emailInput = getByTestId('input-email')
    const emailPassword = getByTestId('input-password')
    const submitButton = getByTestId('submit')

    expect(emailInput).toBeInTheDocument()
    expect(emailPassword).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.change(emailPassword, { target: { value: 'password' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      const actions = store.getActions()

      expect(actions).toStrictEqual([
        { type: '@auth/LOGIN' },
        {
          type: '@auth/LOGIN_FAIL',
          payload: { code: 'Unauthorized', message: 'User not found' },
          error: true,
        },
        {
          type: '@flash/SHOW',
          status: 'error',
          message: 'User not found',
          dismissable: true,
          timeout: undefined,
        },
      ])
    })
  })

  it('disatches correct actions on successful auth', async () => {
    const client = { post: () => Promise.resolve({ user: '1' }) }

    const { getByTestId, store } = renderWith(<Login />, { client })

    const emailInput = getByTestId('input-email')
    const emailPassword = getByTestId('input-password')
    const submitButton = getByTestId('submit')

    expect(emailInput).toBeInTheDocument()
    expect(emailPassword).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.change(emailPassword, { target: { value: 'password' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      const actions = store.getActions()
      expect(actions).toStrictEqual([
        { type: '@auth/LOGIN' },
        { payload: { user: '1' }, type: '@app/RECEIVED' },
        { payload: { user: '1' }, type: '@auth/LOGIN_SUCCESS' },
      ])
    })
  })
})
