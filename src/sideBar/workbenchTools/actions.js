export const OPERATORS_REQUEST = "OPERATORS_REQUEST";
export const OPERATORS_SUCCESS = "OPERATORS_SUCCESS";
export const OPERATORS_ERROR = "OPERATORS_ERROR";

export const operatorsRequest = () => ({
  type: OPERATORS_REQUEST
});

export const operatorsSuccess = operators => ({
  type: OPERATORS_SUCCESS,
  operators
});

export const operatorsError = error => ({ type: OPERATORS_ERROR, error });
