import reducer, { initialState } from '../reducer'

describe('app reducer', () => {
  it('CREATE', () => {
    expect(
      reducer(initialState, {
        type: '@entity/CREATE',
      }),
    ).toEqual({
      ...initialState,
      create: {
        entity: true,
      },
    })
  })

  it('CREATE SUCCESS', () => {
    const state = reducer(initialState, {
      type: '@entity/CREATE',
    })

    expect(
      reducer(state, {
        type: '@entity/CREATE_SUCCESS',
      }),
    ).toEqual({
      ...state,
      create: {
        entity: false,
      },
    })
  })

  it('CREATE FAIL', () => {
    const state = reducer(initialState, {
      type: '@entity/CREATE',
    })

    expect(
      reducer(state, {
        type: '@entity/CREATE_FAIL',
      }),
    ).toEqual({
      ...state,
      create: {
        entity: false,
      },
    })
  })

  it('CREATE multiple', () => {
    let state = reducer(initialState, {
      type: '@entity1/CREATE',
    })

    state = reducer(state, {
      type: '@entity2/CREATE',
    })

    expect(state).toEqual({
      ...initialState,
      create: {
        entity1: true,
        entity2: true,
      },
    })
  })

  it('FETCH', () => {
    expect(
      reducer(initialState, {
        type: '@entity/FETCH',
      }),
    ).toEqual({
      ...initialState,
      fetch: {
        entity: true,
      },
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
      fetch: {
        entity: false,
      },
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
      fetch: {
        entity: false,
      },
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
      fetch: {
        entity1: true,
        entity2: true,
      },
    })
  })
})
