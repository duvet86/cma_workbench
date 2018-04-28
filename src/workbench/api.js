import { from } from "rxjs";

import { TENANT_ID } from "lib/constants";
import { postWithJwtAsync, getWithJwtAsync } from "lib/http";

export const getSessionInfoObs = dataViewId =>
  from(
    postWithJwtAsync(
      `api/qes/${TENANT_ID}/sessions${
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
  from(
    postWithJwtAsync(
      `api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes?applyOnly=${isApplyOnly}`,
      graphData
    )
  );

export const getGraphObs = (
  tenantId,
  sessionId,
  queryGraphId,
  nextChangeNumber
) =>
  from(
    getWithJwtAsync(
      `api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes?nextChangeNumber=${nextChangeNumber}`
    )
  );

export const pushGraphChangesObs = (tenantId, sessionId, queryGraphId) =>
  from(
    postWithJwtAsync(
      `api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/push`
    )
  );

export const popGraphChangesObs = (tenantId, sessionId, queryGraphId) =>
  from(
    postWithJwtAsync(
      `api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/pop`
    )
  );
