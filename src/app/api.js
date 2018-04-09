import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getQesEnabledAsync = () =>
  fromPromise(getWithJwtAsync(`${BASE_URL}/api/qes/cma-enabled`));
