import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWith } from 'test/setupTests'
import UserModal from '../UserModal'

describe('UserModal', () => {
  it('The create user modal renders with modalKey but not state', async () => {
    const query = { modalKey: 'user' }
    const client = {
      post: () =>
        Promise.resolve({
          action: 'store',
          entity: 'user',
          data: { id: 'id1' },
        }),
    }

    const { getByTestId, store } = renderWith(<UserModal />, {
      query,
      client,
    })

    const userModal = getByTestId('modal-create-user')
    const firstNameInput = getByTestId('input-firstName')
    const lastNameInput = getByTestId('input-lastName')
    const emailInput = getByTestId('input-email')
    const passwordInput = getByTestId('input-password')
    const permissionsInput = getByTestId('input-permissions')
    const createButton = getByTestId('submit')

    expect(userModal).toBeInTheDocument()
    expect(firstNameInput.value).toBe('')
    expect(lastNameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
    expect(permissionsInput.value).toBe('')
    expect(createButton).toHaveTextContent('Create')

    fireEvent.change(firstNameInput, { target: { value: 'Joe' } })
    fireEvent.change(lastNameInput, { target: { value: 'Bloggs' } })
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.change(permissionsInput, { target: { value: 'admin' } })

    fireEvent.click(createButton)

    await waitFor(() => {
      const actions = store.getActions()

      expect(actions).toStrictEqual([
        { type: '@user/CREATE' },
        {
          type: '@app/RECEIVED',
          payload: {
            action: 'store',
            entity: 'user',
            data: { id: 'id1' },
          },
        },
        {
          type: '@user/CREATE_SUCCESS',
          payload: {
            action: 'store',
            entity: 'user',
            data: { id: 'id1' },
          },
        },
        {
          type: '@flash/SHOW',
          status: 'success',
          message: 'User created!',
          dismissable: false,
          timeout: 2000,
        },
        { type: '@modal/CLOSE', payload: undefined },
      ])
    })
  })

  it('The edit user modal renders with modalKey and state', async () => {
    const query = {
      modalKey: 'user',
      modalState: { id: 'id1', view: 'edit' },
    }

    const client = {
      patch: () =>
        Promise.resolve({
          action: 'store',
          entity: 'user',
          data: {
            id: 'id1',
            firstName: 'Jane',
            lastName: 'Bloggs',
            email: 'test@test.com',
            permissions: 'admin',
          },
        }),
    }

    const state = {
      entity: {
        user: {
          byId: {
            id1: {
              id: 'id1',
              firstName: 'Joe',
              lastName: 'Bloggs',
              email: 'test@test.com',
              permissions: 'admin',
            },
          },
          allIds: ['id1'],
        },
      },
      user: {
        visibleUsers: ['id1'],
      },
    }

    const { getByTestId, queryByTestId, store } = renderWith(<UserModal />, {
      query,
      client,
      state,
    })

    const userModal = getByTestId('modal-edit-user')
    const firstNameInput = getByTestId('input-firstName')
    const lastNameInput = getByTestId('input-lastName')
    const emailInput = getByTestId('input-email')
    const passwordInput = queryByTestId('input-password')
    const permissionsInput = getByTestId('input-permissions')
    const saveButton = getByTestId('submit')

    expect(userModal).toBeInTheDocument()
    expect(firstNameInput.value).toBe('Joe')
    expect(lastNameInput.value).toBe('Bloggs')
    expect(emailInput.value).toBe('test@test.com')
    expect(passwordInput).not.toBeInTheDocument()
    expect(permissionsInput.value).toBe('admin')
    expect(saveButton).toHaveTextContent('Save')

    fireEvent.change(firstNameInput, {
      target: { value: 'Jane' },
    })

    fireEvent.click(saveButton)

    await waitFor(() => {
      const actions = store.getActions()

      expect(actions).toStrictEqual([
        { type: '@user/UPDATE' },
        {
          type: '@app/RECEIVED',
          payload: {
            action: 'store',
            entity: 'user',
            data: {
              id: 'id1',
              firstName: 'Jane',
              lastName: 'Bloggs',
              email: 'test@test.com',
              permissions: 'admin',
            },
          },
        },
        {
          type: '@user/UPDATE_SUCCESS',
          payload: {
            action: 'store',
            entity: 'user',
            data: {
              id: 'id1',
              firstName: 'Jane',
              lastName: 'Bloggs',
              email: 'test@test.com',
              permissions: 'admin',
            },
          },
        },
        {
          type: '@flash/SHOW',
          status: 'success',
          message: 'User updated!',
          dismissable: false,
          timeout: 2000,
        },
        { type: '@modal/CLOSE', payload: undefined },
      ])
    })
  })
})
