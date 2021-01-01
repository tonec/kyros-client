import { createAction } from '@reduxjs/toolkit'

/*
 * Actions
 * * * * */

const prefix = '@app'

export const FIRST_LOAD = `${prefix}/FIRST_LOAD`

/*
 * Action creators
 * * * * * * * * */

export const setIsFirstLoad = createAction(FIRST_LOAD)
