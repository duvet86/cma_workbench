// @flow

import { TRIGGER_ERROR } from "errorPage/actions";
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
    case TRIGGER_ERROR:
      return {
        error: action.error
      };

    default:
      return state;
  }
}

export default errorPage;
