import {
  OPERATORS_REQUEST,
  OPERATORS_SUCCESS
} from "sideBar/operators/actions";

function operators(
  state = {
    isLoading: true,
    operators: {}
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
        isLoading: false,
        operators: action.operators
      };

    default:
      return state;
  }
}

export default operators;
