import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('api reducer', () => {
  it('FIRST_LOAD', () => {
    expect(
      reducer(initialState, {
        type: actions.FIRST_LOAD,
      }),
    ).toEqual({
      ...initialState,
      isFirstLoad: false,
    })
  })

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
