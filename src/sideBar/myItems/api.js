import { fromPromise } from "rxjs/observable/fromPromise";

import { BASE_URL } from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getMyItemsAsync = () =>
  fromPromise(
    Promise.all([
      getWithJwtAsync(`${BASE_URL}/api/useritems/myitems`),
      getWithJwtAsync(`${BASE_URL}/api/useritems/sharedwithme`)
    ]).then(arrayResponse => ({
      myItems: arrayResponse[0],
      sharedWithMe: arrayResponse[1]
    }))
  );
