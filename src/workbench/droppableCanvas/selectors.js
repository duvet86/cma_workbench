import { createSelector } from "reselect";

const operatorsSelector = state => state.operatorsReducer.operators;
const operatorsInCanvasSelector = state =>
  state.droppableCanvasReducer.operatorsInCanvas;

export const getEnhancedOperators = createSelector(
  operatorsSelector,
  operatorsInCanvasSelector,
  (operators, operatorsInCanvas) =>
    operatorsInCanvas.map(opInCanvas => ({
      ...opInCanvas,
      label: operators[opInCanvas.operatorId].label,
      description: operators[opInCanvas.operatorId].description,
      backgroundColor: operators[opInCanvas.operatorId].backgroundColor,
      IconComponent: operators[opInCanvas.operatorId].IconComponent
    }))
);
