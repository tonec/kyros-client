import * as actions from '../actions'

describe('api actions', () => {
  it('FIRST_LOAD', () => {
    const expectedActions = { type: actions.FIRST_LOAD }

    expect(actions.setIsFirstLoad()).toEqual(expectedActions)
  })
})
