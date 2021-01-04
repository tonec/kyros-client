import reducer, { initialState } from '../reducer'

describe('api reducer', () => {
  it('CREATE', () => {
    expect(
      reducer(initialState, {
        type: '@entity/CREATE',
      }),
    ).toEqual({
      ...initialState,
      crud: {
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
      crud: {
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
      crud: {
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
      crud: {
        entity1: true,
        entity2: true,
      },
    })
  })

  it('UPDATE', () => {
    expect(
      reducer(initialState, {
        type: '@entity/UPDATE',
      }),
    ).toEqual({
      ...initialState,
      crud: {
        entity: true,
      },
    })
  })

  it('UPDATE SUCCESS', () => {
    const state = reducer(initialState, {
      type: '@entity/UPDATE',
    })

    expect(
      reducer(state, {
        type: '@entity/UPDATE_SUCCESS',
      }),
    ).toEqual({
      ...state,
      crud: {
        entity: false,
      },
    })
  })

  it('UPDATE FAIL', () => {
    const state = reducer(initialState, {
      type: '@entity/UPDATE',
    })

    expect(
      reducer(state, {
        type: '@entity/UPDATE_FAIL',
      }),
    ).toEqual({
      ...state,
      crud: {
        entity: false,
      },
    })
  })

  it('UPDATE multiple', () => {
    let state = reducer(initialState, {
      type: '@entity1/UPDATE',
    })

    state = reducer(state, {
      type: '@entity2/UPDATE',
    })

    expect(state).toEqual({
      ...initialState,
      crud: {
        entity1: true,
        entity2: true,
      },
    })
  })

  //

  it('DELETE', () => {
    expect(
      reducer(initialState, {
        type: '@entity/DELETE',
      }),
    ).toEqual({
      ...initialState,
      crud: {
        entity: true,
      },
    })
  })

  it('DELETE SUCCESS', () => {
    const state = reducer(initialState, {
      type: '@entity/DELETE',
    })

    expect(
      reducer(state, {
        type: '@entity/DELETE_SUCCESS',
      }),
    ).toEqual({
      ...state,
      crud: {
        entity: false,
      },
    })
  })

  it('DELETE FAIL', () => {
    const state = reducer(initialState, {
      type: '@entity/DELETE',
    })

    expect(
      reducer(state, {
        type: '@entity/DELETE_FAIL',
      }),
    ).toEqual({
      ...state,
      crud: {
        entity: false,
      },
    })
  })

  it('DELETE multiple', () => {
    let state = reducer(initialState, {
      type: '@entity1/CREATE',
    })

    state = reducer(state, {
      type: '@entity2/CREATE',
    })

    expect(state).toEqual({
      ...initialState,
      crud: {
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
