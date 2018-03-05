import { createSelector } from "reselect";
import { elementType } from "sideBar/operators/operatorsData";
import { getElementId } from "workbench/utils";

// These selectors add layout info to the graph queries and filters.
// The extra info are contained in operatorsExtraInfo obj.
// 1 is the id I'd given to queries and 2 is the one for filters.

const queriesSelector = sessionInfo => sessionInfo.InitialQueryGraph.Queries;

const filtersSelector = sessionInfo =>
  sessionInfo.InitialQueryGraph.InteractiveFilters;

const connectionsSelector = sessionInfo =>
  sessionInfo.InitialQueryGraph.Connections;

export const getGraphQueries = createSelector(queriesSelector, queries =>
  queries.map(({ ElementId, Label, Columns, LayoutX, LayoutY }) => ({
    type: elementType.QUERY,
    elementId: getElementId(ElementId),
    elementLabel: Label,
    columns: Columns,
    x: LayoutX,
    y: LayoutY
  }))
);

export const getGraphFilters = createSelector(filtersSelector, filters =>
  filters.map(({ ElementId, Label, FilterType, LayoutX, LayoutY }) => ({
    type: elementType.FILTER,
    elementId: getElementId(ElementId),
    elementLabel: Label,
    filterType: FilterType,
    x: LayoutX,
    y: LayoutY
  }))
);

export const getGraphConnections = createSelector(
  connectionsSelector,
  connections =>
    connections.map(({ FromElementId, ToElementId }) => ({
      source: getElementId(FromElementId),
      target: getElementId(ToElementId)
    }))
);
