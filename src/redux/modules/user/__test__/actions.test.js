import * as actions from '../actions'

describe('User actions', () => {
  it('FETCH', () => {
    const expectedTypes = [actions.FETCH, actions.FETCH_SUCCESS, actions.FETCH_FAIL]

    expect(actions.fetchUsers().type).toEqual(expectedTypes)
  })
})
