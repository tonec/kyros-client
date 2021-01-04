import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('Modal reducer', () => {
  it('OPEN', () => {
    expect(
      reducer(initialState, {
        type: actions.OPEN,
        payload: {
          modalKey: 'modalKey',
          modalState: { id: '1234', view: 'edit' },
        },
      }),
    ).toEqual({
      ...initialState,
      modalKey: 'modalKey',
      modalState: { id: '1234', view: 'edit' },
    })
  })

  it('CLOSE', () => {
    const state = reducer(initialState, {
      type: actions.OPEN,
      payload: { modalKey: 'modalKey', state: { id: '1234', view: 'edit' } },
    })

    expect(
      reducer(state, {
        type: actions.CLOSE,
      }),
    ).toEqual(initialState)
  })
})
