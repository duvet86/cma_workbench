import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getUserInfoAsync = () =>
  fromPromise(getWithJwtAsync(`${BASE_URL}/api/platform/myprofile`));
