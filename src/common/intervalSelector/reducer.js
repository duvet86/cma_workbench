import {
  INTERVALTYPE_REQUEST,
  INTERVALTYPE_SUCCESS,
  INTERVALTYPE_ERROR,
  INTERVAL_SET_TYPE
} from "common/intervalSelector/actions";

function interval(
  state = {
    error: null,
    isLoading: true,
    intervalTypes: [],
    selectedIntervalType: ""
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
        intervalTypes: action.intervalTypes,
        selectedIntervalType: "DATEOP" // Default to DATEOP.
      };

    case INTERVALTYPE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case INTERVAL_SET_TYPE:
      return {
        ...state,
        selectedIntervalType: action.newIntervalType
      };

    default:
      return state;
  }
}

export default interval;
