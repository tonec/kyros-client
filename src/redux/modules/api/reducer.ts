export const initialState = {
  crud: {},
  fetch: {},
}

export default function (state = initialState, action = {}) {
  const typeSplit = action.type.split('/')
  const entity = typeSplit[0].replace('@', '')

  switch (typeSplit[1]) {
    case 'CREATE':
    case 'UPDATE':
    case 'DELETE':
      return {
        ...state,
        crud: {
          ...state.crud,
          [entity]: true,
        },
      }

    case 'CREATE_SUCCESS':
    case 'UPDATE_SUCCESS':
    case 'DELETE_SUCCESS':
      return {
        ...state,
        crud: {
          ...state.crud,
          [entity]: false,
        },
      }

    case 'CREATE_FAIL':
    case 'UPDATE_FAIL':
    case 'DELETE_FAIL':
      return {
        ...state,
        crud: {
          ...state.crud,
          [entity]: false,
        },
      }

    case 'FETCH':
      return {
        ...state,
        fetch: {
          ...state.fetch,
          [entity]: true,
        },
      }

    case 'FETCH_SUCCESS':
      return {
        ...state,
        fetch: {
          ...state.fetch,
          [entity]: false,
        },
      }

    case 'FETCH_FAIL':
      return {
        ...state,
        fetch: {
          ...state.fetch,
          [entity]: false,
        },
      }

    default:
      return state
  }
}
