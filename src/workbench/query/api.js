import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

//http://desktop-ejm4rss/dev/api/qes/systemdataviews/demo
//http://desktop-ejm4rss/dev/api/qes/demo/dataservices
export const getDataServicesObs = () =>
  fromPromise(getWithJwtAsync(`${BASE_URL}/api/qes/systemdataviews/demo`));

export const getDataServiceDescriptionObs = (
  tenantId,
  sessionId,
  queryGraphId,
  elementId
) =>
  fromPromise(
    getWithJwtAsync(
      `${BASE_URL}/api/qes/${tenantId}/sessions/${sessionId}/querygraph/${queryGraphId}/queries/${elementId}/describe`
    )
  );
