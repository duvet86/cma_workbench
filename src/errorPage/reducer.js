// @flow

import { ERROR_TRIGGER } from "errorPage/actions";
import type { ErrorAction } from "errorPage/actions";

type State = {
  +error?: mixed
};

function errorPage(
  state: State = {
    error: undefined
  },
  action: ErrorAction
) {
  switch (action.type) {
    case ERROR_TRIGGER:
      return {
        error: action.error
      };

    default:
      return state;
  }
}

export default errorPage;
