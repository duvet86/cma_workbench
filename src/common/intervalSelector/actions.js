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

export const INTERVAL_SET_TYPE = "INTERVAL_SET_TYPE";

export const setIntervalType = selectedIntervalType => ({
  type: INTERVALTYPE_SUCCESS,
  selectedIntervalType
});
