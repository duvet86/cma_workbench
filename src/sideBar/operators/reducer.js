import {
  OPERATORS_REQUEST,
  OPERATORS_SUCCESS
} from "sideBar/operators/actions";

function operators(
  state = {
    isLoading: true
  },
  action
) {
  switch (action.type) {
    case OPERATORS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case OPERATORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        operators: action.operators
      };

    default:
      return state;
  }
}

export default operators;
