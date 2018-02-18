import { TRIGGER_ERROR } from "errorPage/actions";

function profile(
  state = {
    error: {
      message: "You shoudn't see this message."
    }
  },
  action
) {
  switch (action.type) {
    case TRIGGER_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

export default profile;
