import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWith } from 'test/setupTests'
import { openModal } from 'helpers/modalQS'
import Clients from '..'

jest.mock('helpers/modalQS', () => {
  return {
    openModal: jest.fn(),
  }
})

describe('Clients', () => {
  it('displays fallback text if no clients', async () => {
    const { getByText } = renderWith(<Clients />)

    const fallbackText = getByText(
      /No clients created. Click 'Add client' above to create one./,
    )

    expect(fallbackText).toBeInTheDocument()
  })

  it('displays a list of clients', async () => {
    const state = {
      entity: {
        client: {
          byId: {
            id1: {
              id: 'id1',
              name: 'Test client 1',
            },
            id2: {
              id: 'id2',
              name: 'Test client 2',
            },
          },
          allIds: ['id2', 'id2'],
        },
      },
      client: {
        visibleClients: ['id1', 'id2'],
      },
    }

    const { getByText } = renderWith(<Clients />, { state })

    const clientName1 = getByText(/Test client 1/)
    const clientName2 = getByText(/Test client 2/)

    expect(clientName1).toBeInTheDocument()
    expect(clientName2).toBeInTheDocument()
  })

  it('add client button should call open modal', () => {
    const { getByTestId } = renderWith(<Clients />)
    const createButton = getByTestId('button')

    expect(createButton).toBeInTheDocument()

    fireEvent.click(createButton)

    expect(openModal).toHaveBeenCalled()
  })

  it('modalKey opens the client modal', () => {
    const query = { modalKey: 'client' }
    const { getByTestId } = renderWith(<Clients />, { query })

    const modal = getByTestId('modal-create-client')

    expect(modal).toBeInTheDocument()
  })
})
