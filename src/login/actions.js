// @flow

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

type LoginRequest = {
  type: string,
  username: string,
  password: string
};

type LoginError = {
  type: string,
  error: string
};

export const loginRequest = (
  username: string,
  password: string
): LoginRequest => ({
  type: LOGIN_REQUEST,
  username,
  password
});

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginError = (error: string): LoginError => ({
  type: LOGIN_ERROR,
  error
});

export const LOGOUT = "LOGOUT";

export const logout = () => ({ type: LOGOUT });
