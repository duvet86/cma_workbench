import { normalize } from "normalizr";
import { graphSchema } from "workbench/schema";

export const SESSION_REQUEST = "SESSION_REQUEST";
export const SESSION_SUCCESS = "SESSION_SUCCESS";
export const SESSION_ERROR = "SESSION_ERROR";

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

export const sessionError = error => ({
  type: SESSION_ERROR,
  error
});

export const GRAPH_SAVE_REQUEST = "GRAPH_SAVE_REQUEST";
export const GRAPH_SAVE_SUCCESS = "GRAPH_SAVE_SUCCESS";
export const GRAPH_SAVE_ERROR = "GRAPH_SAVE_ERROR";

export const graphSaveChangesSuccess = () => ({
  type: GRAPH_SAVE_SUCCESS
});

export const graphSaveChangesError = error => ({
  type: GRAPH_SAVE_ERROR,
  error
});

export const GRAPH_REQUEST = "GRAPH_REQUEST";
export const GRAPH_SUCCESS = "GRAPH_SUCCESS";
export const GRAPH_ERROR = "GRAPH_ERROR";

export const graphRequest = () => ({
  type: GRAPH_REQUEST
});

export const graphSuccess = graphData => ({
  type: GRAPH_SUCCESS,
  graphData
});

export const graphError = error => ({
  type: GRAPH_ERROR,
  error
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
    Columns: []
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
