import { createSelector } from "reselect";

import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

const operatorsSelector = operators => operators;

export const enhancedOperatorsSelector = createSelector(
  operatorsSelector,
  operators =>
    operators.map(({ OperatorServiceId, Label, Description }) => ({
      operatorServiceId: OperatorServiceId,
      label: Label,
      description: Description,
      backgroundColor: operatorsExtraInfo[OperatorServiceId].backgroundColor,
      IconComponent: operatorsExtraInfo[OperatorServiceId].IconComponent
    }))
);
