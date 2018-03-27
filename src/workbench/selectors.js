import { createSelector } from "reselect";
import { elementType } from "sideBar/operators/operatorsData";
import { getElementId } from "workbench/utils";

// These selectors add layout info to the graph queries and filters.
// The extra info are contained in operatorsExtraInfo obj.
// 1 is the id I'd given to queries and 2 is the one for filters.

const sessionInfoSelector = state => state.sessionReducer.sessionInfo;

export const getSessionInfo = createSelector(
  sessionInfoSelector,
  ({
    Graph: { Queries, InteractiveFilters, Connections, ...graphRest },
    ...sessionInfoRest
  }) => ({
    ...sessionInfoRest,
    Graph: {
      ...graphRest,
      Queries: Queries.map(
        ({ ElementId, Label, Columns, LayoutX, LayoutY, ...queryRest }) => ({
          type: elementType.QUERY,
          elementId: getElementId(ElementId),
          elementLabel: Label,
          columns: Columns,
          x: LayoutX,
          y: LayoutY,
          ...queryRest
        })
      ),
      InteractiveFilters: InteractiveFilters.map(
        ({
          ElementId,
          Label,
          FilterType,
          LayoutX,
          LayoutY,
          ...filterRest
        }) => ({
          type: elementType.FILTER,
          elementId: getElementId(ElementId),
          elementLabel: Label,
          filterType: FilterType,
          x: LayoutX,
          y: LayoutY,
          ...filterRest
        })
      ),
      Connections: Connections.map(
        ({ FromElementId, ToElementId, ...connectionRest }) => ({
          source: getElementId(FromElementId),
          target: getElementId(ToElementId),
          ...connectionRest
        })
      )
    }
  })
);
