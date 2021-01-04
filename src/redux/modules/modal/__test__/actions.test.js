import configureStore from 'redux-mock-store'
import apiMiddleware from 'redux/middleware/apiMiddleware'
import * as actions from '../actions'

const client = () => null
const history = {}
const match = {}
const params = {}

const middlewares = [apiMiddleware({ client, history, match, params })]
const mockStore = configureStore(middlewares)

describe('modal actions - useRedux: false', () => {
  it('OPEN', () => {
    const expected = [
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          args: [
            {
              search:
                'modalKey=modalKey&modalState%5Bid%5D=1234&modalState%5Bview%5D=edit',
            },
          ],
          method: 'replace',
        },
      },
    ]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(
      actions.openModal('modalKey', {
        state: { id: '1234', view: 'edit' },
      }),
    )

    const acts = store.getActions()

    expect(acts).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = [
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: { args: [{ search: '' }], method: 'replace' },
      },
    ]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(actions.closeModal())

    const acts = store.getActions()

    expect(acts).toEqual(expectedActions)
  })
})

describe('modal actions - useRedux: true', () => {
  it('OPEN', () => {
    const expected = [
      {
        type: actions.OPEN,
        payload: {
          modalKey: 'modalKey',
          modalState: { id: '1234', view: 'edit' },
        },
      },
    ]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(
      actions.openModal('modalKey', {
        useRedux: true,
        state: { id: '1234', view: 'edit' },
      }),
    )

    const acts = store.getActions()

    expect(acts).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = [{ type: actions.CLOSE }]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(actions.closeModal(true))

    const acts = store.getActions()

    expect(acts).toEqual(expectedActions)
  })
})
