import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWith } from 'test/setupTests'
import ClientModal from '../ClientModal'

describe('ClientModal', () => {
  it('The create client modal renders with modalKey but not state', async () => {
    const query = { modalKey: 'client' }
    const client = {
      post: () =>
        Promise.resolve({
          action: 'store',
          entity: 'client',
          data: { id: 'id1', name: 'Test client name' },
        }),
    }

    const { getByTestId, store } = renderWith(<ClientModal />, {
      query,
      client,
    })
    // debug()

    const clientModal = getByTestId('modal-create-client')
    const nameInput = getByTestId('input-name')
    const createButton = getByTestId('submit')

    expect(clientModal).toBeInTheDocument()
    expect(nameInput.value).toBe('')
    expect(createButton).toHaveTextContent('Create')

    fireEvent.change(nameInput, { target: { value: 'Test client name' } })

    fireEvent.click(createButton)

    await waitFor(() => {
      const actions = store.getActions()

      expect(actions).toStrictEqual([
        { type: '@client/CREATE' },
        {
          type: '@app/RECEIVED',
          payload: {
            action: 'store',
            entity: 'client',
            data: { id: 'id1', name: 'Test client name' },
          },
        },
        {
          type: '@client/CREATE_SUCCESS',
          payload: {
            action: 'store',
            entity: 'client',
            data: { id: 'id1', name: 'Test client name' },
          },
        },
        {
          type: '@flash/SHOW',
          status: 'success',
          message: 'Client created!',
          dismissable: false,
          timeout: 2000,
        },
        { type: '@modal/CLOSE', payload: undefined },
      ])
    })
  })

  it('The edit client modal renders with modalKey and state', async () => {
    const query = {
      modalKey: 'client',
      modalState: { id: 'id1', view: 'edit' },
    }

    const client = {
      patch: () =>
        Promise.resolve({
          action: 'store',
          entity: 'client',
          data: { id: 'id1', name: 'Test client name' },
        }),
    }

    const state = {
      entity: {
        client: {
          byId: {
            id1: {
              id: 'id1',
              name: 'Test client',
            },
          },
          allIds: ['id1'],
        },
      },
      client: {
        visibleClients: ['id1'],
      },
    }

    const { getByTestId, store } = renderWith(<ClientModal />, {
      query,
      client,
      state,
    })

    const clientModal = getByTestId('modal-edit-client')
    const nameInput = getByTestId('input-name')
    const saveButton = getByTestId('submit')

    expect(clientModal).toBeInTheDocument()
    expect(nameInput.value).toBe('Test client')
    expect(saveButton).toHaveTextContent('Save')

    fireEvent.change(nameInput, {
      target: { value: 'Test client name' },
    })

    fireEvent.click(saveButton)

    await waitFor(() => {
      const actions = store.getActions()

      expect(actions).toStrictEqual([
        { type: '@client/UPDATE' },
        {
          type: '@app/RECEIVED',
          payload: {
            action: 'store',
            entity: 'client',
            data: { id: 'id1', name: 'Test client name' },
          },
        },
        {
          type: '@client/UPDATE_SUCCESS',
          payload: {
            action: 'store',
            entity: 'client',
            data: { id: 'id1', name: 'Test client name' },
          },
        },
        {
          type: '@flash/SHOW',
          status: 'success',
          message: 'Client updated!',
          dismissable: false,
          timeout: 2000,
        },
        { type: '@modal/CLOSE', payload: undefined },
      ])
    })
  })
})
