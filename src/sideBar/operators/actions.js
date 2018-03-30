import {
  staticOperatorsList,
  operatorsExtraInfo,
  DEFAULTS
} from "sideBar/operators/operatorsData";

export const OPERATORS_REQUEST = "OPERATORS_REQUEST";
export const OPERATORS_SUCCESS = "OPERATORS_SUCCESS";
export const OPERATORS_ERROR = "OPERATORS_ERROR";

export const operatorsRequest = () => ({
  type: OPERATORS_REQUEST
});

export const operatorsSuccess = operators => {
  const normalizedOperators = staticOperatorsList
    .concat(operators)
    .reduce((result, { OperatorServiceId, Description, Label }) => {
      const extraInfo = operatorsExtraInfo[OperatorServiceId] || DEFAULTS;

      result[OperatorServiceId] = {
        operatorServiceId: OperatorServiceId,
        label: Label,
        description: Description,
        ...extraInfo
      };

      return result;
    }, {});

  return {
    type: OPERATORS_SUCCESS,
    operators: normalizedOperators
  };
};

export const operatorsError = error => ({ type: OPERATORS_ERROR, error });
