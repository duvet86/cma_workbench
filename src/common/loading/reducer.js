import { START_DELAY, END_DELAY } from "common/loading/actions";

function loading(
  state = {
    pastDelay: false
  },
  action
) {
  switch (action.type) {
    case START_DELAY:
      return {
        pastDelay: false
      };

    case END_DELAY:
      return {
        pastDelay: true
      };

    default:
      return state;
  }
}

export default loading;
