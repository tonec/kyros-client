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
})
