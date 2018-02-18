import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_ERROR
} from "profile/actions";

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

    case PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export default profile;
