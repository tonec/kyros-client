import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('Modal reducer', () => {
  it('OPEN', () => {
    expect(
      reducer(initialState, {
        type: actions.OPEN,
        id: 'modalId',
      }),
    ).toEqual({
      ...initialState,
      open: true,
      id: 'modalId',
    })
  })

  it('CLOSE', () => {
    expect(
      reducer(
        {
          open: true,
        },
        {
          type: actions.CLOSE,
        },
      ),
    ).toEqual(initialState)
  })
})
