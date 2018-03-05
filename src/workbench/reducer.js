import { SESSION_REQUEST, SESSION_SUCCESS } from "workbench/actions";

function session(
  state = {
    isLoading: true,
    dataViewId: undefined,
    sessionInfo: undefined
  },
  action
) {
  switch (action.type) {
    case SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        dataViewId: action.dataViewId
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
