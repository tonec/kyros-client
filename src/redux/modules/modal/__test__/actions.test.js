import * as actions from '../actions'

describe('modal actions', () => {
  it('OPEN', () => {
    const expected = {
      type: actions.OPEN,
      id: 'modalId',
    }

    expect(actions.openModal('modalId')).toEqual(expected)
  })

  it('CLOSE', () => {
    const expectedActions = { type: actions.CLOSE }

    expect(actions.closeModal()).toEqual(expectedActions)
  })
})
