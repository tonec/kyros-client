export const initialState = {}

export default function (state = initialState, action = {}) {
  const typeSplit = action.type.split('/')
  const entity = typeSplit[0].replace('@', '')

  switch (typeSplit[1]) {
    case 'FETCH':
      return {
        ...state,
        [entity]: true,
      }

    case 'FETCH_SUCCESS':
      return {
        ...state,
        [entity]: false,
      }

    case 'FETCH_FAIL':
      return {
        ...state,
        [entity]: false,
      }

    default:
      return state
  }
}
