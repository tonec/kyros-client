import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('app reducer', () => {
  it('should handle LOADED', () => {
    expect(reducer(initialState, {
      type: actions.LOADED
    })).toEqual({
      ...initialState,
      isFirstLoad: false
    })
  })
})
