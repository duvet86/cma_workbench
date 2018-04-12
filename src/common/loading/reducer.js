import { DELAY_START, DELAY_END } from "common/loading/actions";

function loading(
  state = {
    pastDelay: false
  },
  action
) {
  switch (action.type) {
    case DELAY_START:
      return {
        pastDelay: false
      };

    case DELAY_END:
      return {
        pastDelay: true
      };

    default:
      return state;
  }
}

export default loading;
