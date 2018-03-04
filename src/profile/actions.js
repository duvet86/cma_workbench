export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_ERROR = "PROFILE_ERROR";

export const profileRequest = () => ({
  type: PROFILE_REQUEST
});

export const profileSuccess = userInfo => ({
  type: PROFILE_SUCCESS,
  userInfo
});

export const profileError = error => ({
  type: PROFILE_ERROR,
  error
});
