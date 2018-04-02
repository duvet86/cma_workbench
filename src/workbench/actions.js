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

export const ADD_QUERY = "ADD_QUERY";
export const UPDATE_QUERY_DATASERVICE = "UPDATE_QUERY_DATASERVICE";

export const addQuery = elementId => ({
  type: ADD_QUERY,
  elementId,
  query: {
    ElementId: elementId,
    IsConfigured: false,
    TargetDataServiceId: null,
    TargetDataViewId: null,
    ElementType: "Query",
    Columns: [],
    Constraints: []
  }
});

export const updateQueryDataService = (elementId, query) => ({
  type: UPDATE_QUERY_DATASERVICE,
  elementId,
  query
});

export const ADD_QUERY_COLUMN = "ADD_QUERY_COLUMN";
export const REMOVE_QUERY_COLUMN = "REMOVE_QUERY_COLUMN";

export const addQueryColumn = (elementId, column) => ({
  type: ADD_QUERY_COLUMN,
  elementId,
  column
});

export const removeQueryColumn = (elementId, columnName) => ({
  type: REMOVE_QUERY_COLUMN,
  elementId,
  columnName
});

export const ADD_QUERY_CONSTRAINT = "ADD_QUERY_CONSTRAINT";
export const REMOVE_QUERY_CONSTRAINT = "REMOVE_QUERY_CONSTRAINT";

export const addQueryConstraint = (elementId, constraint) => ({
  type: ADD_QUERY_COLUMN,
  elementId,
  constraint
});

export const removeQueryConstraint = (elementId, constraintId) => ({
  type: REMOVE_QUERY_COLUMN,
  elementId,
  constraintId
});
