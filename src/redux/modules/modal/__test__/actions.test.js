import configureStore from 'redux-mock-store'
import apiMiddleware from 'redux/middleware/apiMiddleware'
import * as actions from '../actions'

const client = () => null
const history = {}
const match = {}
const params = {}

const middlewares = [apiMiddleware({ client, history, match, params })]
const mockStore = configureStore(middlewares)

describe('modal actions', () => {
  it('OPEN', () => {
    const expected = [
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          args: [{ search: 'modalKey=modalKey' }],
          method: 'push',
        },
      },
      {
        type: actions.OPEN,
        modalKey: 'modalKey',
      },
    ]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(actions.openModal('modalKey'))

    const acts = store.getActions()

    expect(acts).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = { type: actions.CLOSE }

    expect(actions.closeModal()).toEqual(expectedActions)
  })
})
