/*
 * Actions
 * * * * */

const prefix = '@app'

export const LOADED = `${prefix}/LOADED`

/*
 * Action creators
 * * * * * * * * */

export const setAppLoaded = () => ({
  type: LOADED,
})
