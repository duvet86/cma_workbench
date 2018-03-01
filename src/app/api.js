import { fromPromise } from "rxjs/observable/fromPromise";

import { getWithJwtAsync } from "lib/http";

export const getQesEnabledAsync = () =>
  fromPromise(
    getWithJwtAsync("http://desktop-ejm4rss/dev/api/qes/cma-enabled")
  );
