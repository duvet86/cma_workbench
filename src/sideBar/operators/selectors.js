import { createSelector } from "reselect";

import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

const operatorsSelector = operators => operators;

export const enhancedOperatorsSelector = createSelector(
  operatorsSelector,
  operators => {
    const asd = Object.keys(operators).map(key => ({
      operatorServiceId: key,
      label: operators[key].Label,
      description: operators[key].Description,
      backgroundColor: operatorsExtraInfo[key].backgroundColor,
      IconComponent: operatorsExtraInfo[key].IconComponent
    }));
    
    return asd;
  }
);
