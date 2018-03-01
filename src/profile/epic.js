import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import { PROFILE_REQUEST, profileSuccess } from "profile/actions";
import { getUserInfoAsync } from "profile/api";

export const fetchProfileEpic = action$ =>
  action$.pipe(
    ofType(PROFILE_REQUEST),
    mergeMap(() =>
      getUserInfoAsync().pipe(
        map(response => profileSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );
