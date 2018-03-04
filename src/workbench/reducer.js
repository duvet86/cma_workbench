import { SESSION_REQUEST, SESSION_SUCCESS } from "workbench/actions";

function session(
  state = {
    isLoading: true,
    sessionInfo: undefined
  },
  action
) {
  switch (action.type) {
    case SESSION_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SESSION_SUCCESS:
      return {
        isLoading: false,
        sessionInfo: action.sessionInfo
      };

    default:
      return state;
  }
}

export default session;
