import { Observable } from "rxjs/Observable";

import { getWithJwtAsync } from "lib/http";

export const getUserInfoAsync = () =>
  Observable.fromPromise(
    getWithJwtAsync("http://desktop-ejm4rss/dev/api/platform/myprofile")
  );
