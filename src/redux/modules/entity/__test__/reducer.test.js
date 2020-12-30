import { addUser1, addUser2, removeUser2 } from 'test/data/user'
import reducer, { initialState } from '../reducer'
import * as actions from '../../api/actions'

describe('entity reducer', () => {
  it('adds new entities', () => {
    expect(
      reducer(initialState, {
        type: actions.RECEIVED,
        payload: addUser1,
      }),
    ).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0],
        },
      },
    })
  })

  it('merges new entities with existing', () => {
    let store = reducer(initialState, {
      type: actions.RECEIVED,
      payload: addUser1,
    })

    store = reducer(store, {
      type: actions.RECEIVED,
      payload: addUser2,
    })

    expect(store).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf', '5b9a30c8dd231e70430bd8cg'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0],
          '5b9a30c8dd231e70430bd8cg': addUser2.data.entities[0],
        },
      },
    })
  })

  it('removes entities', () => {
    let store = reducer(initialState, {
      type: actions.RECEIVED,
      payload: addUser1,
    })

    store = reducer(store, {
      type: actions.RECEIVED,
      payload: addUser2,
    })

    store = reducer(store, {
      type: actions.RECEIVED,
      payload: removeUser2,
    })

    expect(store).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0],
        },
      },
    })
  })
})
