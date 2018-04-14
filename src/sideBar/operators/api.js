import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL, TENANT_ID } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getOperatorsAsync = () =>
  fromPromise(
    getWithJwtAsync(`${BASE_URL}/api/qes/${TENANT_ID}/operatorservices`)
  );
