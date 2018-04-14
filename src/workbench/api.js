import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL, TENANT_ID } from "lib/constants";
import { postWithJwtAsync, getWithJwtAsync } from "lib/http";

export const getSessionInfoObs = dataViewId =>
  fromPromise(
    postWithJwtAsync(
      `${BASE_URL}/api/qes/${TENANT_ID}/sessions${
        dataViewId ? `?dataViewId=${dataViewId}` : ""
      }`
    )
  );

export const saveGraphObs = (
  tenantId,
  sessionId,
  queryGraphId,
  graphData,
  isApplyOnly = false
) =>
  fromPromise(
    postWithJwtAsync(
      `${BASE_URL}/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes?applyOnly=${isApplyOnly}`,
      graphData
    )
  );

export const getGraphObs = (
  tenantId,
  sessionId,
  queryGraphId,
  nextChangeNumber
) =>
  fromPromise(
    getWithJwtAsync(
      `${BASE_URL}/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes?nextChangeNumber=${nextChangeNumber}`
    )
  );

export const pushGraphChangesObs = (tenantId, sessionId, queryGraphId) =>
  fromPromise(
    postWithJwtAsync(
      `${BASE_URL}/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/push`
    )
  );

export const popGraphChangesObs = (tenantId, sessionId, queryGraphId) =>
  fromPromise(
    postWithJwtAsync(
      `${BASE_URL}/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/pop`
    )
  );
