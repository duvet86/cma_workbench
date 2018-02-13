export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  username,
  password
});

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
  loggedAt: Date.now()
});

export const loginError = error => ({ type: LOGIN_ERROR, error });

export const logout = () => ({ type: LOGOUT });
