export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

export function loginRequest(username, password) {
  return { type: LOGIN_REQUEST, username, password };
}

export function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token, loggedAt: Date.now() };
}

export function loginError(error) {
  return { type: LOGIN_ERROR, error };
}

export function logout() {
  return { type: LOGOUT };
}
