import { fromPromise } from "rxjs/observable/fromPromise";

import constants from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getOperatorsAsync = () =>
  fromPromise(
    getWithJwtAsync(`${constants.BASE_URL}/api/qes/demo/operatorservices`)
  );
