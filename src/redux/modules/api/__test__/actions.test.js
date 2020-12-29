import * as actions from '../actions'

describe('api actions', () => {
  it('CONNECT', () => {
    const expectedActions = { type: actions.CONNECT }

    expect(actions.connect()).toEqual(expectedActions)
  })

  it('DISCONNECT', () => {
    const expectedActions = { type: actions.DISCONNECT }

    expect(actions.disconnect()).toEqual(expectedActions)
  })

  it('CONNECTED', () => {
    const expectedActions = { type: actions.CONNECTED }

    expect(actions.connected()).toEqual(expectedActions)
  })

  it('RECEIVED', () => {
    const expectedActions = { type: actions.RECEIVED }

    expect(actions.received()).toEqual(expectedActions)
  })

  it('CLOSED', () => {
    const expectedActions = { type: actions.CLOSED }

    expect(actions.closed()).toEqual(expectedActions)
  })

  it('ERROR', () => {
    const expectedActions = { type: actions.ERROR }

    expect(actions.error()).toEqual(expectedActions)
  })

  it('COMPLETE', () => {
    const expectedActions = { type: actions.COMPLETE }

    expect(actions.complete()).toEqual(expectedActions)
  })
})
