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

export const QUERY_SAVE_DESCRIBE_REQUEST = "QUERY_SAVE_DESCRIBE_REQUEST";
export const QUERY_SAVE_DESCRIBE_SUCCESS = "QUERY_SAVE_DESCRIBE_SUCCESS";
export const QUERY_SAVE_DESCRIBE_ERROR = "QUERY_SAVE_DESCRIBE_ERROR";

export const querySaveDescribeRequest = (
  tenantId,
  sessionId,
  queryGraphId,
  queryData
) => ({
  type: QUERY_SAVE_DESCRIBE_REQUEST,
  tenantId,
  sessionId,
  queryGraphId,
  queryData
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

export const CREATE_QUERY = "CREATE_QUERY";
export const UPDATE_QUERY = "UPDATE_QUERY";

export const addQuery = elementId => ({
  type: CREATE_QUERY,
  elementId,
  query: {
    ElementId: elementId,
    IsConfigured: false,
    TargetDataServiceId: null,
    TargetDataViewId: null,
    ElementType: "Query"
  }
});

export const updateQuery = (elementId, query) => ({
  type: UPDATE_QUERY,
  elementId,
  query
});

export const UPDATE_QUERY_DATASERVICE = "UPDATE_QUERY_DATASERVICE";

export const updateQueryDataService = (elementId, query) => ({
  type: UPDATE_QUERY_DATASERVICE,
  elementId,
  query
});
