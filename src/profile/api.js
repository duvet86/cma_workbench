import { fromPromise } from "rxjs/observable/fromPromise";

import { getWithJwtAsync } from "lib/http";

export const getUserInfoAsync = () =>
  fromPromise(
    getWithJwtAsync("http://desktop-ejm4rss/dev/api/platform/myprofile")
  );
