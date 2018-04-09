import { fromPromise } from "rxjs/observable/fromPromise";

import constants from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getUserInfoAsync = () =>
  fromPromise(
    getWithJwtAsync(`${constants.BASE_URL}/api/platform/myprofile`)
  );
