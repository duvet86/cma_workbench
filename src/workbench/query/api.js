import { fromPromise } from "rxjs/observable/fromPromise";
import { getWithJwtAsync } from "lib/http";

export const getDataServicesObs = () =>
  fromPromise(
    getWithJwtAsync("http://desktop-ejm4rss/dev/api/qes/demo/dataservices")
  );

export const getDataServiceDescriptionObs = (
  tenantId,
  sessionId,
  queryGraphId,
  elementId
) =>
  fromPromise(
    getWithJwtAsync(
      `http://desktop-ejm4rss/dev/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/queries/${elementId}/describe`
    )
  );
