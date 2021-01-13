import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWith } from 'test/setupTests'
import { openModal } from 'helpers/modalQS'
import Users from '..'

jest.mock('helpers/modalQS', () => {
  return {
    openModal: jest.fn(),
  }
})

describe('Users', () => {
  it('displays fallback text if no users', async () => {
    const { getByText } = renderWith(<Users />)

    const fallbackText = getByText(
      /No users created. Click 'Add user' above to create one./,
    )

    expect(fallbackText).toBeInTheDocument()
  })

  it('displays a list of users', async () => {
    const state = {
      entity: {
        user: {
          byId: {
            id1: {
              id: 'id1',
              firstName: 'Test firstName 1',
              lastName: 'Test lastName 1',
            },
            id2: {
              id: 'id2',
              firstName: 'Test firstName 2',
              lastName: 'Test lastName 2',
            },
          },
          allIds: ['id2', 'id2'],
        },
      },
      user: {
        visibleUsers: ['id1', 'id2'],
      },
    }

    const { getByText } = renderWith(<Users />, { state })

    const firstName1 = getByText(/Test firstName 1/)
    const lastName1 = getByText(/Test lastName 1/)

    const firstName2 = getByText(/Test firstName 2/)
    const lastName2 = getByText(/Test lastName 2/)

    expect(firstName1).toBeInTheDocument()
    expect(lastName1).toBeInTheDocument()

    expect(firstName2).toBeInTheDocument()
    expect(lastName2).toBeInTheDocument()
  })

  it('add user button should call open modal', () => {
    const { getByTestId } = renderWith(<Users />)
    const createButton = getByTestId('button')

    expect(createButton).toBeInTheDocument()

    fireEvent.click(createButton)

    expect(openModal).toHaveBeenCalled()
  })

  it('modalKey opens the user modal', () => {
    const query = { modalKey: 'user' }
    const { getByTestId } = renderWith(<Users />, { query })

    const modal = getByTestId('modal-create-user')

    expect(modal).toBeInTheDocument()
  })
})
