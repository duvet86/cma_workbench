import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { QES_ENABLED_REQUEST, qesEnabledSuccess } from "app/actions";
import { getQesEnabledAsync } from "app/api";
import { handleException } from "errorPage/epic";

export const appEpic = action$ =>
  action$.pipe(
    ofType(QES_ENABLED_REQUEST),
    mergeMap(() =>
      getQesEnabledAsync().pipe(
        map(isQesEnabled => qesEnabledSuccess(isQesEnabled)),
        catchError(error => handleException(error))
      )
    )
  );
