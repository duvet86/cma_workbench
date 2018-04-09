import { fromPromise } from "rxjs/observable/fromPromise";

import constants from "lib/constants";
import { getWithJwtAsync } from "lib/http";

export const getMyItemsAsync = () =>
  fromPromise(
    Promise.all([
      getWithJwtAsync(`${constants.BASE_URL}/api/useritems/myitems`),
      getWithJwtAsync(`${constants.BASE_URL}/api/useritems/sharedwithme`)
    ]).then(arrayResponse => ({
      myItems: arrayResponse[0],
      sharedWithMe: arrayResponse[1]
    }))
  );
