import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { denormalize } from "normalizr";

import { graphSchema } from "workbench/schema";
import { handleException } from "errorPage/epic";
import {
  SESSION_REQUEST,
  GRAPH_SAVE_REQUEST,
  GRAPH_REQUEST,
  CREATE_QUERY,
  UPDATE_QUERY_DATASERVICE,
  sessionSuccess,
  graphSaveChangesSuccess,
  graphSuccess
} from "workbench/actions";
import { queryDescribeRequest } from "workbench/query/actions";
import { openConfig } from "workbench/canvas/actions";
import { getSessionInfoObs, saveGraphObs, getGraphObs } from "workbench/api";
import { elementType } from "sideBar/operators/operatorsData";

export const sessionEpic = action$ =>
  action$.pipe(
    ofType(SESSION_REQUEST),
    mergeMap(({ dataViewId }) =>
      getSessionInfoObs(dataViewId).pipe(
        map(response => sessionSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );

export const saveGraphEpic = action$ =>
  action$.pipe(
    ofType(GRAPH_SAVE_REQUEST),
    mergeMap(({ tenantId, sessionId, queryGraphId, graphData }) =>
      saveGraphObs(tenantId, sessionId, queryGraphId, graphData).pipe(
        map(() => graphSaveChangesSuccess()),
        catchError(error => handleException(error))
      )
    )
  );

export const getGraphEpic = action$ =>
  action$.pipe(
    ofType(GRAPH_REQUEST),
    mergeMap(() =>
      getGraphObs().pipe(
        map(response => graphSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );

export const addQueryEpic = action$ =>
  action$.pipe(
    ofType(CREATE_QUERY),
    map(({ elementId }) => openConfig(elementType.QUERY, elementId))
  );

export const updateQueryDataServiceEpic = (action$, store) =>
  action$.pipe(
    ofType(UPDATE_QUERY_DATASERVICE),
    mergeMap(({ elementId }) => {
      const {
        sessionReducer: {
          session: { TenantId, SessionId, QueryGraphId },
          graph,
          queries,
          filters,
          connections
        }
      } = store.getState();

      const denormalizedGraph = denormalize(graph, graphSchema, {
        queries,
        filters,
        connections
      });

      return saveGraphObs(
        TenantId,
        SessionId,
        QueryGraphId,
        denormalizedGraph
      ).pipe(
        map(() => queryDescribeRequest(elementId)),
        catchError(error => handleException(error))
      );
    })
  );
