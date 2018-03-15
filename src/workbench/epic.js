import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import {
  SESSION_REQUEST,
  GRAPH_REQUEST,
  GRAPH_SAVE_REQUEST,
  graphSaveErrorChanges,
  graphSuccess,
  graphError,
  sessionSuccess
} from "workbench/actions";
import {
  getSessionInfoAsync,
  saveGraphAsync,
  getGraphAsync
} from "workbench/api";

export const sessionEpic = action$ =>
  action$.pipe(
    ofType(SESSION_REQUEST),
    mergeMap(({ dataViewId }) =>
      getSessionInfoAsync(dataViewId).pipe(
        map(response => sessionSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );

export const saveGraphEpic = action$ =>
  action$.pipe(
    ofType(GRAPH_SAVE_REQUEST),
    mergeMap(({ tenantId, sessionId, queryGraphId, graphData }) =>
      saveGraphAsync(tenantId, sessionId, queryGraphId, graphData).pipe(
        catchError(error => graphSaveErrorChanges(error))
      )
    )
  );

export const getGraphEpic = action$ =>
  action$.pipe(
    ofType(GRAPH_REQUEST),
    mergeMap(() =>
      getGraphAsync().pipe(
        map(response => graphSuccess(response)),
        catchError(error => graphError(error))
      )
    )
  );
