/*
* Actions
* * * * */

const prefix = '@app'

export const LOADED = `${prefix}/LOADED`

/*
* Action creators
* * * * * * * * */

export const appLoaded = () => ({
  type: LOADED
})
