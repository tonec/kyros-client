import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('api reducer', () => {
  it('should handle LOADED', () => {
    expect(
      reducer(initialState, {
        type: actions.LOADED,
      }),
    ).toEqual({
      ...initialState,
      appLoaded: false,
    })
  })
})
