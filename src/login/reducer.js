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
        isLoading: true
      };

    case LOGIN_SUCCESS:
      return {
        isLoading: false
      };

    default:
      return state;
  }
}

export default login;
