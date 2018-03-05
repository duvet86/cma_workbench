import { createSelector } from "reselect";
import { elementType } from "sideBar/operators/operatorsData";

// These selectors add layout info to the graph queries and filters.
// The extra info are contained in operatorsExtraInfo obj.
// 1 is the id I'd given to queries and 2 is the one for filters.

const queriesSelector = sessionInfo => sessionInfo.InitialQueryGraph.Queries;

const filtersSelector = sessionInfo =>
  sessionInfo.InitialQueryGraph.InteractiveFilters;

export const getGraphQueries = createSelector(queriesSelector, queries =>
  queries.map(({ ElementId, Label, Columns, LayoutX, LayoutY }) => ({
    type: elementType.QUERY,
    elementId: ElementId,
    elementLabel: Label,
    columns: Columns,
    x: LayoutX,
    y: LayoutY
  }))
);

export const getGraphFilters = createSelector(filtersSelector, filters =>
  filters.map(({ ElementId, Label, LayoutX, LayoutY }) => ({
    type: elementType.FILTER,
    elementId: ElementId,
    elementLabel: Label,
    x: LayoutX,
    y: LayoutY
  }))
);
