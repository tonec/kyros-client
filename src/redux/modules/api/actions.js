/*
* Actions
* * * * */

const prefix = '@api'

// UI dispatched actions
export const CONNECT = `${prefix}/CONNECT`
export const DISCONNECT = `${prefix}/DISCONNECT`

// clientMiddleware dispatches these actions
export const CONNECTED = `${prefix}/CONNECTED`
export const SENT = `${prefix}/SENT`
export const RECEIVED = `${prefix}/RECEIVED`
export const ERROR = `${prefix}/ERROR`
export const COMPLETE = `${prefix}/COMPLETE`
export const CLOSED = `${prefix}/CLOSED`

// device online/offline status
export const IS_ONLINE = `${prefix}/IS_ONLINE`
export const IS_OFFLINE = `${prefix}/IS_OFFLINE`

/*
* Action creators
* * * * * * * * */

// Connect to WebSocket
export const connect = () => ({
  type: CONNECT
})

// Disconnect from WebSocket
export const disconnect = () => ({
  type: DISCONNECT
})

// WebSocket has connected (Dispatched by middleware)
export const connected = () => ({
  type: CONNECTED
})

//  Message sent to WebSocket (Dispatched by middleware)
export const sent = message => ({
  type: SENT,
  message
})

// Message received by WebSocket (Dispatched by middleware)
export const received = message => {
  return {
    type: RECEIVED,
    message
  }
}

// WebSocket closed (Dispatched by middleware)
export const closed = () => ({
  type: CLOSED
})

// WebSocket observable received error (Dispatched by middleware)
export const error = err => ({
  type: ERROR, err
})

// WebSocket observeble received complete (Dispatched by middleware)
export const complete = () => ({
  type: COMPLETE
})

// Device is online
export const isOnline = () => ({
  type: IS_ONLINE
})

// Device is offline
export const isOffline = () => ({
  type: IS_OFFLINE
})