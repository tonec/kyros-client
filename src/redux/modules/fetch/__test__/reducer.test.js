import reducer, { initialState } from '../reducer'

describe('fetch reducer', () => {
  it('FETCH', () => {
    expect(
      reducer(initialState, {
        type: '@entity/FETCH',
      }),
    ).toEqual({
      ...initialState,
      entity: true,
    })
  })

  it('FETCH SUCCESS', () => {
    const state = reducer(initialState, {
      type: '@entity/FETCH',
    })

    expect(
      reducer(state, {
        type: '@entity/FETCH_SUCCESS',
      }),
    ).toEqual({
      ...state,
      entity: false,
    })
  })

  it('FETCH FAIL', () => {
    const state = reducer(initialState, {
      type: '@entity/FETCH',
    })

    expect(
      reducer(state, {
        type: '@entity/FETCH_FAIL',
      }),
    ).toEqual({
      ...state,
      entity: false,
    })
  })

  it('FETCH multiple', () => {
    let state = reducer(initialState, {
      type: '@entity1/FETCH',
    })

    state = reducer(state, {
      type: '@entity2/FETCH',
    })

    expect(state).toEqual({
      ...initialState,
      entity1: true,
      entity2: true,
    })
  })
})
