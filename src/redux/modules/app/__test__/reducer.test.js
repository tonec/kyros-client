import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('api reducer', () => {
  it('should handle FIRST_LOAD', () => {
    expect(
      reducer(initialState, {
        type: actions.FIRST_LOAD,
      }),
    ).toEqual({
      ...initialState,
      isFirstLoad: false,
    })
  })
})
