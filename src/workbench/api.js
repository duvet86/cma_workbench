import { fromPromise } from "rxjs/observable/fromPromise";

import { postWithJwtAsync } from "lib/http";

export const getSessionInfoAsync = () =>
  fromPromise(
    postWithJwtAsync("http://desktop-ejm4rss/dev/api/qes/demo/sessions")
  );
