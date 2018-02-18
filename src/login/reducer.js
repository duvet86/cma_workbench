import { LOGIN_REQUEST, LOGIN_SUCCESS } from "login/actions";

function login(
  state = {
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}

export default login;
