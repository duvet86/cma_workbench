import { TRIGGER_ERROR } from "errorPage/actions";

function errorPage(
  state = {
    error: undefined
  },
  action
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
