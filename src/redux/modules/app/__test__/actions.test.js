import * as actions from '../actions'

describe('app actions', () => {
  it('should dispatch the correct action for appLoaded', () => {
    const expectedActions = { type: actions.LOADED }

    expect(actions.appLoaded()).toEqual(expectedActions)
  })
})
