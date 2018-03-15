export const SESSION_REQUEST = "SESSION_REQUEST";
export const SESSION_SUCCESS = "SESSION_SUCCESS";
export const SESSION_ERROR = "SESSION_ERROR";

export const GRAPH_SAVE_REQUEST = "GRAPH_SAVE_REQUEST";
export const GRAPH_SAVE_ERROR = "GRAPH_SAVE_ERROR";

export const GRAPH_REQUEST = "GRAPH_REQUEST";
export const GRAPH_SUCCESS = "GRAPH_SUCCESS";
export const GRAPH_ERROR = "GRAPH_ERROR";

export const sessionRequest = dataViewId => ({
  type: SESSION_REQUEST,
  dataViewId
});

export const sessionSuccess = sessionInfo => ({
  type: SESSION_SUCCESS,
  sessionInfo
});

export const sessionError = error => ({
  type: SESSION_ERROR,
  error
});

export const saveGraphChanges = (
  tenantId,
  sessionId,
  queryGraphId,
  graphData
) => ({
  type: GRAPH_SAVE_REQUEST,
  tenantId,
  sessionId,
  queryGraphId,
  graphData
});

export const graphSaveErrorChanges = error => ({
  type: GRAPH_SAVE_REQUEST,
  error
});

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
