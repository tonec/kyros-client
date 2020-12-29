import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('api reducer', () => {
  it('CONNECT', () => {
    expect(
      reducer(initialState, {
        type: actions.CONNECT,
      }),
    ).toEqual({
      ...initialState,
      connecting: true,
    })
  })

  it('CONNECTED', () => {
    expect(
      reducer(initialState, {
        type: actions.CONNECTED,
      }),
    ).toEqual({
      ...initialState,
      connecting: false,
      connected: true,
    })
  })

  it('CLOSED', () => {
    expect(
      reducer(initialState, {
        type: actions.CLOSED,
      }),
    ).toEqual({
      ...initialState,
      connected: false,
    })
  })
})
