import {
  OPERATORS_REQUEST,
  OPERATORS_SUCCESS
} from "sideBar/operators/actions";

import {
  staticOperatorsList,
  operatorsExtraInfo
} from "sideBar/operators/operatorsData";

function operators(
  state = {
    isLoading: true,
    operators: undefined
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
      const normalizedOperators = staticOperatorsList
        .concat(action.operators)
        .reduce((result, { OperatorServiceId, Description, Label }) => {
          result[OperatorServiceId] = {
            operatorServiceId: OperatorServiceId,
            label: Label,
            description: Description,
            ...operatorsExtraInfo[OperatorServiceId]
          };

          return result;
        }, {});

      return {
        isLoading: false,
        operators: normalizedOperators
      };

    default:
      return state;
  }
}

export default operators;
