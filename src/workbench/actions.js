export const SESSION_REQUEST = "SESSION_REQUEST";
export const SESSION_SUCCESS = "SESSION_SUCCESS";
export const SESSION_ERROR = "SESSION_ERROR";

export const sessionRequest = () => ({
  type: SESSION_REQUEST
});

export const sessionSuccess = sessionInfo => ({
  type: SESSION_SUCCESS,
  sessionInfo
});

export const sessionError = error => ({
  type: SESSION_ERROR,
  error
});
