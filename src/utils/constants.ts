export const TOKEN_KEY = 'accessToken'

// Modal query params
export const MODAL_QUERY_PARAMS = ['modalKey', 'modalView', 'modalState']

// Permissions
export const PERMISSIONS = ['admin', 'reception', 'host']

export const PERMISSIONS_OPTIONS = {
  admin: 'Admin',
  reception: 'Reception',
  host: 'Host',
}

// Schedule view timescales
export enum TIMESCALES {
  day,
  week,
  fortnight,
  month,
}

export const TIMESCALES_OPTIONS = {
  day: 'Day',
  week: 'Week',
  fortnight: '2 weeks',
  month: 'Month',
}
