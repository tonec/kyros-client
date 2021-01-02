export const initialState = {
  create: {},
  fetch: {},
}

export default function (state = initialState, action = {}) {
  const typeSplit = action.type.split('/')
  const entity = typeSplit[0].replace('@', '')

  switch (typeSplit[1]) {
    case 'CREATE':
      return {
        ...state,
        create: {
          ...state.create,
          [entity]: true,
        },
      }

    case 'CREATE_SUCCESS':
      return {
        ...state,
        create: {
          ...state.create,
          [entity]: false,
        },
      }

    case 'CREATE_FAIL':
      return {
        ...state,
        create: {
          ...state.create,
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
