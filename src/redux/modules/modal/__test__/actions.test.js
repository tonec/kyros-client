import * as actions from '../actions'

describe('modal actions', () => {
  it('OPEN', () => {
    const expected = {
      type: actions.OPEN,
    }

    expect(actions.openModal()).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = { type: actions.CLOSE }

    expect(actions.closeModal()).toEqual(expectedActions)
  })
})
