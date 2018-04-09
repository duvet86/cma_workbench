import { fromPromise } from "rxjs/observable/fromPromise";

import constants from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getQesEnabledAsync = () =>
  fromPromise(getWithJwtAsync(`${constants.BASE_URL}/api/qes/cma-enabled`));
