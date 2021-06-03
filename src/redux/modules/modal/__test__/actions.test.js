import configureStore from 'redux-mock-store'
import apiMiddleware from 'redux/middleware/apiMiddleware'
import * as actions from '../actions'

const client = () => null
const history = {}

const middlewares = [apiMiddleware({ client, history })]
const mockStore = configureStore(middlewares)

describe('modal actions', () => {
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

    dispatch(actions.openModal('modalKey', { id: '1234', view: 'edit' }))

    const acts = store.getActions()

    expect(acts).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = [
      {
        type: actions.CLOSE,
      },
    ]

    const store = mockStore({})
    const { dispatch } = store

    dispatch(actions.closeModal())

    const acts = store.getActions()

    expect(acts).toEqual(expectedActions)
  })
})
