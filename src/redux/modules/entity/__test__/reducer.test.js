import { addUser1, addUser2, removeUser2 } from 'test/data/user'
import reducer, { initialState } from '../reducer'
import * as actions from '../../api/actions'


describe('entity reducer', () => {
  it('should handle MESSAGE and add new entity to state', () => {
    expect(reducer(initialState, {
      type: actions.MESSAGE,
      message: addUser1
    })).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0]
        }
      }
    })
  })

  it('should merge new entities to those that are existing', () => {
    let store = reducer(initialState, {
      type: actions.MESSAGE,
      message: addUser1
    })

    store = reducer(store, {
      type: actions.MESSAGE,
      message: addUser2
    })

    expect(store).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf', '5b9a30c8dd231e70430bd8cg'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0],
          '5b9a30c8dd231e70430bd8cg': addUser2.data.entities[0]
        }
      }
    })
  })

  it('should remove entities that have been removed', () => {
    let store = reducer(initialState, {
      type: actions.MESSAGE,
      message: addUser1
    })

    store = reducer(store, {
      type: actions.MESSAGE,
      message: addUser2
    })

    store = reducer(store, {
      type: actions.MESSAGE,
      message: removeUser2
    })

    expect(store).toEqual({
      ...initialState,
      user: {
        allIds: ['5b9a30c8dd231e70430bd8cf'],
        byId: {
          '5b9a30c8dd231e70430bd8cf': addUser1.data.entities[0]
        }
      }
    })
  })
})