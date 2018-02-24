import { Observable } from "rxjs/Observable";

import { getWithJwtAsync } from "lib/http";

export const getMyItemsAsync = () =>
  Observable.fromPromise(
    Promise.all([
      getWithJwtAsync("http://desktop-ejm4rss/dev/api/useritems/myitems"),
      getWithJwtAsync("http://desktop-ejm4rss/dev/api/useritems/sharedwithme")
    ]).then(arrayResponse => ({
      myItems: arrayResponse[0],
      sharedWithMe: arrayResponse[1]
    }))
  );
