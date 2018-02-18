import { PROFILE_REQUEST, PROFILE_SUCCESS } from "profile/actions";

function profile(
  state = {
    isLoading: true
  },
  action
) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo
      };

    default:
      return state;
  }
}

export default profile;
