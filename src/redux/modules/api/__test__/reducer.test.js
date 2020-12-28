import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('api reducer', () => {
  it('should handle CONNECT', () => {
    expect(reducer(initialState, {
      type: actions.CONNECT
    })).toEqual({
      ...initialState,
      connecting: true
    })
  })

  it('should handle CONNECTED', () => {
    expect(reducer(initialState, {
      type: actions.CONNECTED
    })).toEqual({
      ...initialState,
      connecting: false,
      connected: true
    })
  })

  it('should handle CLOSED', () => {
    expect(reducer(initialState, {
      type: actions.CLOSED
    })).toEqual({
      ...initialState,
      connected: false
    })
  })
})
