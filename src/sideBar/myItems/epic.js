import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import { MY_ITEMS_REQUEST, myItemsSuccess } from "sideBar/myItems/actions";
import { getMyItemsAsync } from "sideBar/myItems/api";

export const myItemsEpic = action$ =>
  action$.pipe(
    ofType(MY_ITEMS_REQUEST),
    mergeMap(() =>
      getMyItemsAsync().pipe(
        map(response => myItemsSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );
