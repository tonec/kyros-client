/*
 * Actions
 * * * * */

const prefix = '@app'

export const FIRST_LOAD = `${prefix}/FIRST_LOAD`

/*
 * Action creators
 * * * * * * * * */

export const setIsFirstLoad = () => ({
  type: FIRST_LOAD,
})
