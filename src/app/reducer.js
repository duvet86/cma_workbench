import { QES_ENABLED_REQUEST, QES_ENABLED_SUCCESS } from "app/actions";

function login(
  state = {
    isLoading: false,
    isQesEnabled: false
  },
  action
) {
  switch (action.type) {
    case QES_ENABLED_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case QES_ENABLED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isQesEnabled: action.isQesEnabled
      };

    default:
      return state;
  }
}

export default login;
