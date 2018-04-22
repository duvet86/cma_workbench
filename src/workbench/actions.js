import { normalize } from "normalizr";
import { graphSchema } from "workbench/schema";

export const SESSION_REQUEST = "SESSION_REQUEST";
export const SESSION_SUCCESS = "SESSION_SUCCESS";

export const sessionRequest = dataViewId => ({
  type: SESSION_REQUEST,
  dataViewId
});

export const sessionSuccess = ({ InitialQueryGraph, ...rest }) => {
  const normalizedGraph = normalize(InitialQueryGraph, graphSchema);

  return {
    type: SESSION_SUCCESS,
    payload: {
      session: { ...rest },
      graph: normalizedGraph.result,
      ...normalizedGraph.entities
    }
  };
};

export const GRAPH_SAVE_REQUEST = "GRAPH_SAVE_REQUEST";
export const GRAPH_SAVE_SUCCESS = "GRAPH_SAVE_SUCCESS";

export const graphSaveChangesRequest = () => ({
  type: GRAPH_SAVE_REQUEST
});

export const graphSaveChangesSuccess = () => ({
  type: GRAPH_SAVE_SUCCESS
});

export const GRAPH_REQUEST = "GRAPH_REQUEST";
export const GRAPH_SUCCESS = "GRAPH_SUCCESS";

export const graphRequest = () => ({
  type: GRAPH_REQUEST
});

export const graphSuccess = graphData => ({
  type: GRAPH_SUCCESS,
  graphData
});

export const GRAPH_PUSH_REQUEST = "GRAPH_PUSH_REQUEST";
export const GRAPH_PUSH_SUCCESS = "GRAPH_PUSH_SUCCESS";

export const graphPushRequest = () => ({
  type: GRAPH_PUSH_REQUEST
});

export const graphPushSuccess = () => ({
  type: GRAPH_PUSH_SUCCESS
});

export const GRAPH_POP_REQUEST = "GRAPH_POP_REQUEST";
export const GRAPH_POP_SUCCESS = "GRAPH_POP_SUCCESS";

export const graphPopRequest = () => ({
  type: GRAPH_POP_REQUEST
});

export const graphPopSuccess = () => ({
  type: GRAPH_POP_SUCCESS
});

export const QUERY_ADD = "QUERY_ADD";
export const QUERY_DATASERVICE_UPDATE = "QUERY_DATASERVICE_UPDATE";

export const addQuery = elementId => ({
  type: QUERY_ADD,
  elementId,
  query: {
    ElementId: elementId,
    IsConfigured: false,
    TargetDataServiceId: "",
    TargetDataViewId: "",
    ElementType: "Query",
    Columns: [],
    Constraints: []
  }
});

export const updateQueryDataService = (elementId, query) => ({
  type: QUERY_DATASERVICE_UPDATE,
  elementId,
  query
});

export const QUERY_COLUMN_ADD = "QUERY_COLUMN_ADD";
export const QUERY_COLUMN_REMOVE = "QUERY_COLUMN_REMOVE";

export const addQueryColumn = (elementId, column) => ({
  type: QUERY_COLUMN_ADD,
  elementId,
  column
});

export const removeQueryColumn = (elementId, columnName) => ({
  type: QUERY_COLUMN_REMOVE,
  elementId,
  columnName
});

export const QUERY_CONSTRAINT_ADD = "QUERY_CONSTRAINT_ADD";
export const QUERY_CONSTRAINT_TYPE = "QUERY_CONSTRAINT_TYPE";
export const QUERY_CONSTRAINT_VALUES = "QUERY_CONSTRAINT_VALUES";
export const QUERY_CONSTRAINT_REMOVE = "QUERY_CONSTRAINT_REMOVE";

export const addQueryConstraint = (
  elementId,
  constraintId,
  contraintTarget
) => ({
  type: QUERY_CONSTRAINT_ADD,
  elementId,
  constraint: {
    ConstraintId: constraintId,
    Values: undefined,
    ValuesHint: "NoHint",
    ...contraintTarget
  }
});

export const updateQueryConstraintType = (
  elementId,
  constraintId,
  constraintType
) => ({
  type: QUERY_CONSTRAINT_TYPE,
  elementId,
  constraintId,
  constraintType
});

export const updateQueryConstraintValues = (
  elementId,
  constraintId,
  vectorValues,
  valuesHint
) => ({
  type: QUERY_CONSTRAINT_VALUES,
  elementId,
  constraintId,
  vectorValues,
  valuesHint
});

export const removeQueryConstraint = (elementId, constraintId) => ({
  type: QUERY_CONSTRAINT_REMOVE,
  elementId,
  constraintId
});
