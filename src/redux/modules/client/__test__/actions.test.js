import * as actions from '../actions'

describe('Client actions', () => {
  it('FETCH', () => {
    const expectedTypes = [
      actions.FETCH,
      actions.FETCH_SUCCESS,
      actions.FETCH_FAIL,
    ]

    expect(actions.fetchClients().types).toEqual(expectedTypes)
  })
})
