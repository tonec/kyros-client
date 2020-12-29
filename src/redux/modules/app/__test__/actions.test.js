import * as actions from '../actions'

describe('api actions', () => {
  it('should dispatch the correct action for isFirstLoad', () => {
    const expectedActions = { type: actions.FIRST_LOAD }

    expect(actions.setIsFirstLoad()).toEqual(expectedActions)
  })
})
