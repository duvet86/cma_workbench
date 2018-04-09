import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getOperatorsAsync = () =>
  fromPromise(getWithJwtAsync(`${BASE_URL}/api/qes/demo/operatorservices`));
