import update from "immutability-helper";

import {
  INTERVALTYPE_REQUEST,
  INTERVALTYPE_SUCCESS,
  INTERVALTYPE_ERROR,
  INTERVAL_SET
} from "common/intervalSelector/actions";

function interval(
  state = {
    error: null,
    isLoading: true,
    intervalTypes: [],
    interval: {
      type: "DATEOP"
    }
  },
  action
) {
  switch (action.type) {
    case INTERVALTYPE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case INTERVALTYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        intervalTypes: action.intervalTypes
      };

    case INTERVALTYPE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case INTERVAL_SET:
      return update(state, {
        interval: {
          $merge: {
            ...action.newInterval
          }
        }
      });

    default:
      return state;
  }
}

export default interval;
