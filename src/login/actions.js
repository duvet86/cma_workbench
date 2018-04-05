export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  username,
  password
});

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginError = error => ({ type: LOGIN_ERROR, error });

export const LOGOUT = "LOGOUT";

export const logout = () => ({ type: LOGOUT });
