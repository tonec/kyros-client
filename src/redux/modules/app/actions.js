/*
 * Actions
 * * * * */

const prefix = '@app'

export const FIRST_LOAD = `${prefix}/FIRST_LOAD`
export const LOGIN_DATA_FETCHED = `${prefix}/LOGIN_DATA_FETCHED`

/*
 * Action creators
 * * * * * * * * */

export const setIsFirstLoad = () => ({
  type: FIRST_LOAD,
})

export const loginDataFetched = () => ({
  type: LOGIN_DATA_FETCHED,
})
