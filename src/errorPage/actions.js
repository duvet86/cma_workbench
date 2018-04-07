// @flow

export const TRIGGER_ERROR = "TRIGGER_ERROR";

export type ErrorAction = {
  type: "TRIGGER_ERROR",
  error: mixed
};

export const triggerError = (error: mixed): ErrorAction => ({
  type: TRIGGER_ERROR,
  error
});
