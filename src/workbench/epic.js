import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { denormalize } from "normalizr";

import { graphSchema } from "workbench/schema";
import { handleException } from "errorPage/epic";
import {
  SESSION_REQUEST,
  GRAPH_PUSH_REQUEST,
  GRAPH_SAVE_REQUEST,
  GRAPH_REQUEST,
  QUERY_ADD,
  QUERY_DATASERVICE_UPDATE,
  sessionSuccess,
  graphPushSuccess,
  graphSaveChangesSuccess,
  graphSuccess
} from "workbench/actions";
import { openQueryConfig, queryDescribeRequest } from "workbench/query/actions";
import {
  getSessionInfoObs,
  pushGraphChangesObs,
  saveGraphObs,
  getGraphObs
} from "workbench/api";

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

export const saveGraphEpic = (action$, store) =>
  action$.pipe(
    ofType(GRAPH_SAVE_REQUEST),
    mergeMap(({ tenantId, sessionId, queryGraphId, graphData }) => {
      const {
        sessionReducer: {
          session: { TenantId, SessionId, QueryGraphId },
          graph
        }
      } = store.getState();

      return saveGraphObs(TenantId, SessionId, QueryGraphId, graph, true).pipe(
        map(() => graphSaveChangesSuccess()),
        catchError(error => handleException(error))
      );
    })
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

export const pushGraphChangesEpic = (action$, store) =>
  action$.pipe(
    ofType(GRAPH_PUSH_REQUEST),
    mergeMap(() => {
      const {
        sessionReducer: { session: { TenantId, SessionId, QueryGraphId } }
      } = store.getState();

      return pushGraphChangesObs(TenantId, SessionId, QueryGraphId).pipe(
        map(response => graphPushSuccess(response)),
        catchError(error => handleException(error))
      );
    })
  );

// export const popGraphChangesEpic = (action$, store) =>
//   action$.pipe(
//     ofType(CLOSE_QUERY_CONFIG),
//     mergeMap(() => {
//       const {
//         sessionReducer: { session: { TenantId, SessionId, QueryGraphId } }
//       } = store.getState();

//       return popGraphChangesObs(TenantId, SessionId, QueryGraphId).pipe(
//         map(response => graphPopSuccess(response)),
//         catchError(error => handleException(error))
//       );
//     })
//   );

export const addQueryEpic = action$ =>
  action$.pipe(
    ofType(QUERY_ADD),
    map(({ elementId }) => openQueryConfig(elementId))
  );

export const updateQueryDataServiceEpic = (action$, store) =>
  action$.pipe(
    ofType(QUERY_DATASERVICE_UPDATE),
    mergeMap(({ elementId, query: { TargetDataViewId } }) => {
      if (!TargetDataViewId) {
        return [openQueryConfig(elementId)];
      }

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
        mergeMap(() =>
          getGraphObs(
            TenantId,
            SessionId,
            QueryGraphId,
            graph.NextChangeNumber
          ).pipe(
            map(() => queryDescribeRequest()),
            catchError(error => handleException(error))
          )
        ),
        catchError(error => handleException(error))
      );
    })
  );
