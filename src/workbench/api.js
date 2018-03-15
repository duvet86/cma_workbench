import { fromPromise } from "rxjs/observable/fromPromise";

import { postWithJwtAsync, getWithJwtAsync } from "lib/http";

export const getSessionInfoAsync = dataViewId => {
  const param = dataViewId ? `?dataViewId=${dataViewId}` : "";

  return fromPromise(
    postWithJwtAsync(`http://desktop-ejm4rss/dev/api/qes/demo/sessions${param}`)
  );
};

export const saveGraphAsync = (tenantId, sessionId, queryGraphId, graphData) =>
  fromPromise(
    postWithJwtAsync(
      `http://desktop-ejm4rss/dev/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes`,
      graphData
    )
  );

export const getGraphAsync = (
  tenantId,
  sessionId,
  queryGraphId,
  nextChangeNumber
) =>
  fromPromise(
    getWithJwtAsync(
      `http://desktop-ejm4rss/dev/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/changes?nextChangeNumber=${nextChangeNumber}`
    )
  );
