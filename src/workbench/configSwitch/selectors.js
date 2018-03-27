import { createSelector } from "reselect";
import { elementType as ELEMENT_TYPE } from "sideBar/operators/operatorsData";

const elementTypeSelector = state => state.configSwitchReducer.elementType;

export const isDrawerOpen = createSelector(
  elementTypeSelector,
  elementType => elementType !== ELEMENT_TYPE.NONE
);
