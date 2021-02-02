import { createAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

/*
 * Actions
 * * * * */

const prefix = '@app'

export const FIRST_LOAD = `${prefix}/FIRST_LOAD`

// UI dispatched actions
export const CONNECT = `${prefix}/CONNECT`
export const DISCONNECT = `${prefix}/DISCONNECT`

// middleware dispatches these actions
export const RECEIVED = `${prefix}/RECEIVED`
export const CONNECTED = `${prefix}/CONNECTED`
export const SENT = `${prefix}/SENT`
export const ERROR = `${prefix}/ERROR`
export const COMPLETE = `${prefix}/COMPLETE`
export const CLOSED = `${prefix}/CLOSED`

// device online/offline status
export const IS_ONLINE = `${prefix}/IS_ONLINE`
export const IS_OFFLINE = `${prefix}/IS_OFFLINE`

/*
 * Action creators
 * * * * * * * * */

export const setIsFirstLoad = createAction(FIRST_LOAD)

// Message received from api (Dispatched by middleware)
export const received = createAction<AxiosResponse>(RECEIVED)

// Connect to WebSocket
export const connect = createAction(CONNECT)

// Disconnect from WebSocket
export const disconnect = createAction(DISCONNECT)

// WebSocket has connected (Dispatched by middleware)
export const connected = createAction(CONNECTED)

//  Message sent to WebSocket (Dispatched by middleware)
export const sent = createAction(SENT)

// WebSocket closed (Dispatched by middleware)
export const closed = createAction(CLOSED)

// WebSocket observable received error (Dispatched by middleware)
export const error = createAction(ERROR)

// WebSocket observeble received complete (Dispatched by middleware)
export const complete = createAction(COMPLETE)

// Device is online
export const isOnline = createAction(IS_ONLINE)

// Device is offline
export const isOffline = createAction(IS_OFFLINE)
