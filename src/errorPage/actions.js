// @flow

export const ERROR_TRIGGER = "ERROR_TRIGGER";

export type ErrorAction = {
  type: "ERROR_TRIGGER",
  error: mixed
};

export const triggerError = (error: mixed): ErrorAction => ({
  type: ERROR_TRIGGER,
  error
});
