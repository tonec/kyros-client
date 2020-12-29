import * as actions from '../actions'

describe('api actions', () => {
  it('should dispatch the correct action for CONNECT', () => {
    const expectedActions = { type: actions.CONNECT }

    expect(actions.connect()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for DISCONNECT', () => {
    const expectedActions = { type: actions.DISCONNECT }

    expect(actions.disconnect()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for CONNECTED', () => {
    const expectedActions = { type: actions.CONNECTED }

    expect(actions.connected()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for RECEIVED', () => {
    const expectedActions = { type: actions.RECEIVED }

    expect(actions.received()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for CLOSED', () => {
    const expectedActions = { type: actions.CLOSED }

    expect(actions.closed()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for ERROR', () => {
    const expectedActions = { type: actions.ERROR }

    expect(actions.error()).toEqual(expectedActions)
  })

  it('should dispatch the correct action for COMPLETE', () => {
    const expectedActions = { type: actions.COMPLETE }

    expect(actions.complete()).toEqual(expectedActions)
  })
})
