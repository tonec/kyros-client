import { TOKEN_KEY, USER_KEY } from './constants'

export const saveAuthData = data => {
  sessionStorage.setItem(TOKEN_KEY, data.auth_token)
  sessionStorage.setItem(USER_KEY, JSON.stringify(data.user))
}

export const getAuthData = () => {
  const token = sessionStorage.getItem(TOKEN_KEY)

  if (!token) {
    return null
  }

  return {
    token,
    user: JSON.parse(sessionStorage.getItem(USER_KEY)),
  }
}

export const clearAuthData = () => {
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(USER_KEY)
}
