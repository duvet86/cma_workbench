export const INTERVALTYPE_REQUEST = "INTERVALTYPE_REQUEST";
export const INTERVALTYPE_SUCCESS = "INTERVALTYPE_SUCCESS";
export const INTERVALTYPE_ERROR = "INTERVALTYPE_ERROR";

export const intervalTypesRequest = () => ({
  type: INTERVALTYPE_REQUEST
});

export const intervalTypesSuccess = intervalTypes => ({
  type: INTERVALTYPE_SUCCESS,
  intervalTypes
});

export const intervalTypesError = error => ({
  type: INTERVALTYPE_ERROR,
  error
});

export const INTERVAL_SET = "INTERVAL_SET";

export const setIntervalType = newInterval => ({
  type: INTERVAL_SET,
  newInterval
});

export const RESOLVE_INTERVAL_REQUEST = "RESOLVE_INTERVAL_REQUEST";
export const RESOLVE_INTERVAL_SUCCESS = "RESOLVE_INTERVAL_SUCCESS";
export const RESOLVE_INTERVAL_ERROR = "RESOLVE_INTERVAL_ERROR";

export const resolveStringRequest = (intervalType, offset = 0) => ({
  type: RESOLVE_INTERVAL_REQUEST
});

export const resolveStringSuccess = intervalTypes => ({
  type: RESOLVE_INTERVAL_SUCCESS,
  intervalTypes
});

export const resolveStringError = error => ({
  type: RESOLVE_INTERVAL_ERROR,
  error
});
