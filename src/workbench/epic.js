import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import { SESSION_REQUEST, sessionSuccess } from "workbench/actions";
import { getSessionInfoAsync } from "workbench/api";

export const sessionEpic = action$ =>
  action$.pipe(
    ofType(SESSION_REQUEST),
    mergeMap(() =>
      getSessionInfoAsync().pipe(
        map(response => sessionSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );
